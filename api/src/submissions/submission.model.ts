import { Table, Column, Model, DataType, BelongsTo, ForeignKey, Sequelize } from 'sequelize-typescript';

@Table({
    tableName: 'submissions'
})
export default class Submission extends Model<Submission> {
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    })
    id: number;

    @Column({
        type: DataType.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
    })
    uuid: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    latitude: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    longitude: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    gender: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    age: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    high_risk_country: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    exposure: boolean;

    @Column({
        type: DataType.JSONB,
        allowNull: true
    })
    symptoms: object;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: true
    })
    fever_temperature: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    symptoms_exist: boolean;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    email: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    phone_number: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    ip_address: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    session_id: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    intent: string;
}
