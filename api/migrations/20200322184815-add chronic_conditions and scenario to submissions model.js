'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.describeTable('submissions').then(async attributes => {
                if (!attributes.chronic_conditions) {
                    await queryInterface.addColumn('submissions', 'chronic_conditions', {
                        type: Sequelize.BOOLEAN,
                        allowNull: true
                    });
                }
                if (!attributes.scenario) {
                    await queryInterface.addColumn('submissions', 'scenario', {
                        type: Sequelize.TEXT,
                        allowNull: true
                    });
                }
                if (!attributes.scenario_description) {
                    await queryInterface.addColumn('submissions', 'scenario_description', {
                        type: Sequelize.TEXT,
                        allowNull: true
                    });
                }
            })
        ]
    },

    down: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.describeTable('submissions').then(async attributes => {
                if (attributes.chronic_conditions) {
                    await queryInterface.removeColumn('submissions', 'chronic_conditions');
                }
                if (attributes.scenario) {
                    await queryInterface.removeColumn('submissions', 'scenario');
                }
                if (attributes.scenario_description) {
                    await queryInterface.removeColumn('submissions', 'scenario_description');
                }
            })
        ]
    },
};
