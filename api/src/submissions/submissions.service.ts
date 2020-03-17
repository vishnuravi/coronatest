import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Submission from './submission.model';
import { CreateSubmissionDto } from './dto/createSubmission.dto';

@Injectable()
export class SubmissionsService {
    constructor(@InjectModel(Submission) private readonly submissionModel: typeof Submission) {}

    async createSubmission(dto: CreateSubmissionDto, sessionID, ipAddress) {
        await this.submissionModel.create({
            ...dto,
            session_id: sessionID || null,
            ip_address: ipAddress || null
        });
        return this.getScenario(dto);
    }

    getScenario(dto) {
        // Has high risk symptoms
        if (dto.symptoms.some(symptom => ['fever', 'cough', 'shortness_of_breath'].includes(symptom))) {
            
            // *** SEVERE SYMPTOMS ***
            // fever > 39 & 1 extra symptom (not fever)
            if (dto.fever_temperature > 39 && 
                dto.symptoms.some(
                    symptom => ['cough', 'shortness_of_breath']
                    .includes(symptom)
                )
            ) {
                return {
                    probability: 'SEVERE',
                    risk_message: 'high_risk_severe_symptoms_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_5'
                };
            } 
            // changes
            // *** MEDIUM SYMPTOMS ***
            else if (
                // fever > 38 & 1 extra symptom
                (dto.fever_temperature >= 38 &&
                dto.symptoms.some(
                    symptom => ['cough', 'shortness_of_breath']
                    .includes(symptom)
                )) ||
                // or shortness of breath
                dto.symptoms.includes('shortness_of_breath')
            ) {
                // medium symptoms + risk
                if (dto.high_risk_country === true || dto.exposure === true) {
                    return {
                        probability: 'HIGH',
                        risk_message: 'high_risk_medium_symptoms_message',
                        act_message: 'how_to_act_health_board',
                        scenario: 'SCENARIO_4'
                    };
                } else {
                    return {
                        probability: 'MEDIUM',
                        risk_message: 'medium_risk_medium_symptoms_message',
                        act_message: 'how_to_act_health_board',
                        scenario: 'SCENARIO_7'
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
                    scenario: 'SCENARIO_3'
                };
            }
            // fever or cough
            else {
                return {
                    probability: 'MEDIUM',
                    risk_message: 'low_risk_light_symptoms_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_6'
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
                    scenario: 'SCENARIO_2'
                };
            } 
            // healthy? :)
            else {
                return {
                    probability: 'LOW',
                    risk_message: 'low_risk_message',
                    act_message: 'how_to_act_health_board',
                    scenario: 'SCENARIO_1'
                };
            }
        }
    }
}
