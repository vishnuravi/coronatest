import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Submission from './submission.model';
import { CreateSubmissionDto } from './dto/createSubmission.dto';
import { Op } from 'sequelize';

@Injectable()
export class SubmissionsService {
    constructor(@InjectModel(Submission) private readonly submissionModel: typeof Submission) {}

    async createSubmission(dto: CreateSubmissionDto, sessionID, IPAddress) {
        let submission = await this.submissionModel.create({
            ...dto,
            session_id: sessionID || null,
            ip_address: IPAddress || null
        });

        // determine scenario
        let scenario = this.getScenario(dto);

        // update submission
        this.submissionModel.update({
            scenario: scenario.scenario,
            scenario_description: scenario.scenario_description
        }, {
            where: {
                id: submission.id
            }
        });

        delete scenario.scenario_description;

        return scenario;
    }

    getScenario(dto) {
        let riskGroup = (dto.age >= 80 || dto.chronic_conditions) ? true : false;

        // Has high risk symptoms
        if (dto.symptoms.some(symptom => ['fever', 'cough', 'shortness_of_breath'].includes(symptom))) {
            // *** SEVERE SYMPTOMS ***
            // fever > 39 & 1 extra symptom (not fever)
            if (
                dto.fever_temperature > 39 &&
                dto.symptoms.some(symptom => ['cough', 'shortness_of_breath'].includes(symptom))
            ) {
                return {
                    probability: 'SEVERE',
                    risk_message: 'high_risk_severe_symptoms_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_5',
                    scenario_description: 'Severe symptoms'
                };
            }

            // *** RISK GROUP ***
            else if (riskGroup) {
                if (dto.high_risk_country === true || dto.exposure === true) {
                    return {
                        probability: 'HIGH',
                        risk_message: 'risk_group_symptoms_message',
                        act_message: 'how_to_act_health_board',
                        scenario: 'SCENARIO_8',
                        scenario_description: 'Moderate or mild symptoms, risk group, risk factor'
                    };
                } else {
                    return {
                        probability: 'MEDIUM',
                        risk_message: 'risk_group_symptoms_message',
                        act_message: 'how_to_act_health_board',
                        scenario: 'SCENARIO_9',
                        scenario_description: 'Moderate or mild symptoms, risk group, no risk factor'
                    };
                }
            }

            // *** MEDIUM SYMPTOMS ***
            else if (
                // fever > 38 & 1 extra symptom
                (dto.fever_temperature >= 38 &&
                    dto.symptoms.some(symptom => ['cough', 'shortness_of_breath'].includes(symptom))) ||
                // or shortness of breath
                dto.symptoms.includes('shortness_of_breath')
            ) {
                // medium symptoms + risk
                if (dto.high_risk_country === true || dto.exposure === true) {
                    return {
                        probability: 'HIGH',
                        risk_message: 'high_risk_medium_symptoms_message',
                        act_message: 'how_to_act_health_board',
                        scenario: 'SCENARIO_4',
                        scenario_description: 'Moderate symptoms, risk factor'
                    };
                } else {
                    return {
                        probability: 'MEDIUM',
                        risk_message: 'medium_risk_medium_symptoms_message',
                        act_message: 'how_to_act_health_board',
                        scenario: 'SCENARIO_7',
                        scenario_description: 'Moderate symptoms, no risk factor'
                    };
                }
            }

            // *** LIGHT SYMPTOMS ***
            // fever or cough + risk
            else if (dto.high_risk_country === true || dto.exposure === true) {
                return {
                    probability: 'HIGH',
                    risk_message: 'high_risk_light_symptoms_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_3',
                    scenario_description: 'Mild symptoms, risk factor'
                };
            }
            // fever or cough
            else {
                return {
                    probability: 'MEDIUM',
                    risk_message: 'low_risk_light_symptoms_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_6',
                    scenario_description: 'Mild symptoms, no risk factor'
                };
            }
        }
        // no symptoms
        else {
            // risk factor
            if (dto.high_risk_country === true || dto.exposure === true) {
                return {
                    probability: 'HIGH',
                    risk_message: 'high_risk_no_symptoms_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_2',
                    scenario_description: 'Healthy patient, risk factor'
                };
            }
            // healthy? :)
            else {
                return {
                    probability: 'LOW',
                    risk_message: 'low_risk_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_1',
                    scenario_description: 'Healthy patient, no risk factor'
                };
            }
        }
    }

    async getSubmissions(query) {
        let limit = parseInt(query.limit, 10) || 500;
        let offset = parseInt(query.offset, 10) || 0;
        let sortDirection = query.sort_direction || 'ASC';
        let idGte = parseInt(query.id_greater_than_or_equal, 10) || 0;

        return await this.submissionModel.findAll({
            where: {
                id: {
                    [Op.gte]: idGte
                }
            },
            order: [
                ['id', sortDirection]
            ],
            limit,
            offset
        });
    }
}
