import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateClientPasswordMigration1684938863231 implements MigrationInterface {
    name = 'UpdateClientPasswordMigration1684938863231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    }

}
