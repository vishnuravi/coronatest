'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return [
            await queryInterface.describeTable('submissions').then(async attributes => {
                if (!attributes.ip_address) {
                    await queryInterface.addColumn('submissions', 'ip_address', {
                        type: Sequelize.TEXT,
                        allowNull: true
                    });
                }
                if (!attributes.session_id) {
                    await queryInterface.addColumn('submissions', 'session_id', {
                        type: Sequelize.TEXT,
                        allowNull: true
                    });
                }
                if (!attributes.intent) {
                    await queryInterface.addColumn('submissions', 'intent', {
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
                if (attributes.ip_address) {
                    await queryInterface.removeColumn('submissions', 'ip_address');
                }
                if (attributes.session_id) {
                    await queryInterface.removeColumn('submissions', 'session_id');
                }
                if (attributes.intent) {
                    await queryInterface.removeColumn('submissions', 'intent');
                }
            })
        ]
    },
};
