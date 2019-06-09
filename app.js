var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
function addDelay() {
    //for (let index = 0; index < 999999999; index++) { }
}


function getFlamingoData() {
    return data = [
        {
            nodeTitle: 'AWS',
            subNode: [
                {
                    subNodeTitle: 'EC2',
                    leafs: [
                        {
                            id: 4324324,
                            leafTitle: 'Cost by region',
                            type: 'datatable',
                            apiKey: 'testMetricAPI',
                            size: 12,
                            metrics: { contain: 'instance data' },
                            columns: [
                                { name: 'Alert Type', key: 'alertType' },
                                { name: 'Instance ID', key: 'instanceId', display: false },
                                { name: 'Current Instance Type', key: 'current', display: false },
                                { name: 'Suggested Instance Type', key: 'suggested', display: false },
                                { name: 'Resource Id', key: 'resourceId', display: false },
                                { name: 'Usage Date', key: 'usageDate', },
                                { name: 'Current Cost', key: 'costMtm', display: false },
                                { name: 'variance', key: 'variance', },
                                {
                                    name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal',
                                    modalTitle: 'ELB Scale In/Out',
                                    drillParams: [
                                        { key: 'resourceId', display: true },
                                        { key: 'costMtm', display: true },
                                    ],
                                    componentsAPIKey: 'getScaleInOutAPI',
                                }
                            ]
                        },
                        {
                            id: 19999,
                            leafTitle: 'EC2 Spending',
                            type: 'summaryGraph',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            drillDown: {
                                drillTo: 'costdashboard',
                                defSelectTabIndex: { nodeIndex: 2, subNodeIndex: 1, tabIndex: 1 }
                            },
                            metrics: { deploy: "Mounted", build: "Released" },
                            noDataText: 'Summary data is not currently available',
                        },
                        {
                            id: 323,
                            leafTitle: 'Cost by Service Type',
                            type: 'datatable',
                            noDataText: 'Cost by Service Type Info can\'t be retrieved',
                            apiKey: 'testMetricAPI',
                            size: 9,
                            columns: [
                                { name: 'Alert Type', key: 'alertType', },
                                { name: 'Instance ID', key: 'instanceId' },
                                { name: 'Current Instance Type', key: 'current' },
                                { name: 'Suggested Instance Type', key: 'suggested' },
                                { name: 'Resource Id', key: 'resourceId', },
                                { name: 'Usage Date', key: 'usageDate', },
                                { name: 'Current Cost', key: 'costMtm', },
                                { name: 'variance', key: 'variance', },
                                {
                                    name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal',
                                    modalTitle: 'Change Instance Type',
                                    drillParams: [
                                        { key: 'instanceId', display: true },
                                        { key: 'current' },
                                        { key: 'suggested', display: true },
                                        { key: 'costMtm', display: true },
                                    ],
                                    componentsAPIKey: 'getInstanceTypesAPI',
                                }
                            ]
                        },
                        {
                            id: 123232,
                            leafTitle: 'Drill down for test resource',
                            type: 'datatable',
                            noDataText: 'Cost by Service Type Info can\'t be retrieved',
                            apiKey: 'testMetricAPI',
                            size: 9,
                            columns: [
                                { name: 'Alert Type', key: 'alertType', },
                                { name: 'Instance ID', key: 'instanceId' },
                                { name: 'Current Instance Type', key: 'current' },
                                { name: 'Suggested Instance Type', key: 'suggested' },
                                { name: 'Resource Id', key: 'resourceId', },
                                { name: 'Usage Date', key: 'usageDate', },
                                { name: 'Current Cost', key: 'costMtm', },
                                { name: 'variance', key: 'variance', },
                                {
                                    name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill',
                                    modalTitle: 'Change Instance Type',
                                    drillParams: [
                                        { key: 'resourceId' },
                                    ],
                                }
                            ]
                        },
                        {
                            id: 1,
                            leafTitle: 'EC2 Spending',
                            type: 'summaryGraph',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            drillDown: {
                                drillTo: 'detail',
                            },
                            metrics: { deploy: "Mounted", build: "Released" },
                        },
                        {
                            id: 2,
                            leafTitle: 'EC2 shift Spending',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            drillDown: {
                                drillTo: 'detail',
                            },
                            metrics: 'CONTAINER',
                        },
                        {
                            id: 3,
                            leafTitle: 'Spending By Region',
                            type: 'pie', isPro: true,
                            isPro: true,
                            apiKey: 'statusFlemsAPI',
                            size: 3,
                            drillDown: {
                                drillTo: 'drill',
                            },
                            metrics: 'EWES_STATE',

                        },
                        {
                            id: 4,
                            leafTitle: 'Spending By Distribution',
                            type: 'pie', isPro: true,
                            isPro: true,
                            legendPosition: 'top',
                            isHalfCircle: true,
                            apiKey: 'distributionServiceAPI',
                            size: 6,
                            metrics: 'EWES_STATE',

                        },
                        {
                            id: 5,
                            leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: { deploy: "Not deployed", build: "Failed" },
                            drillDown: {
                                drillTo: 'detail',
                            },
                        },
                        {
                            leafTitle: 'Cost Refactor',
                            type: 'tab',
                            size: 12,
                            tabs: [
                                {
                                    id: 312,
                                    leafTitle: 'TCP',
                                    type: 'datatable',
                                    apiKey: 'dataTableSummaryAPI',
                                    size: 12,
                                    noDataText: 'No TCP Info',
                                    metrics: { contain: 'instance data' },
                                    defaultRowPerPage: 8,
                                    hideToolBar: true,
                                    columns: [
                                        { name: 'S/N', key: 'id', },
                                        { name: 'Instance', key: 'name' },
                                        { name: 'Age', key: 'age' },
                                        { name: 'Location', key: 'location' },
                                        { name: 'Type', key: 'level' },
                                        { name: 'mood', key: 'mood' },
                                        { name: 'Status', key: 'status', type: 'progress' },
                                        {
                                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'costdashboard',
                                            defSelectTabIndex: { nodeIndex: 1, subNodeIndex: 1, tabIndex: 1 }
                                        }
                                    ]
                                },
                                {
                                    id: 32144,
                                    leafTitle: 'UDP',
                                    type: 'datatable',
                                    apiKey: 'dataTableSummaryAPI',
                                    size: 6,
                                    metrics: { contain: 'instance data' },
                                    columns: [
                                        { name: 'Instance', key: 'name' },
                                        { name: 'Location', key: 'location' },
                                        { name: 'Type', key: 'level' },
                                        { name: 'Status', key: 'status', type: 'progress' },
                                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: '0', drillValue: 5 }
                                    ]
                                },
                                {
                                    id: 23124,
                                    leafTitle: 'KMP',
                                    type: 'datatable',
                                    apiKey: 'dataTableSummaryAPI',
                                    size: 12,
                                    metrics: { contain: 'instance data' },
                                    columns: [
                                        { name: 'Types', key: 'name' },
                                        { name: 'Places', key: 'location' },
                                        { name: 'Level', key: 'level' },
                                        { name: 'Indicator', key: 'status', type: 'progress' },
                                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5 }
                                    ]
                                },
                                {
                                    id: 9997,
                                    leafTitle: 'Top 10 Services by Instance',
                                    type: 'bar',
                                    singular: true,
                                    apiKey: 'singularBarAPI',
                                    size: 6,
                                    metrics: { deploy: "Not deployed", build: "Failed" },
                                },
                                {
                                    id: 40966,
                                    leafTitle: 'Spending By Provider',
                                    type: 'pie', isPro: true,
                                    apiKey: 'distributionServiceAPI',
                                    size: 3,
                                    metrics: 'EWES_STATE',
                                },
                                {
                                    id: 16542,
                                    leafTitle: 'EC2 Spending',
                                    type: 'summaryGraph',
                                    apiKey: 'summaryFlemingoAPI',
                                    size: 3,
                                    drillDown: {
                                        drillTo: 'detail',
                                    },
                                    metrics: { deploy: "Mounted", build: "Released" },
                                },
                                {
                                    id: 22378,
                                    leafTitle: 'EC2 shift Spending',
                                    type: 'summary',
                                    apiKey: 'costsFlemingoAPI',
                                    size: 3,
                                    drillDown: {
                                        drillTo: 'detail',
                                    },
                                    metrics: 'CONTAINER',
                                },
                            ]
                        },
                        {
                            id: 6,
                            leafTitle: 'Top 10 Services by CPU',
                            type: 'bar',
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 4,
                            metrics: 'SOLID_STATE',

                        },
                        {
                            id: 4324,
                            leafTitle: 'Top 10 Services by Instance',
                            type: 'bar',
                            singular: true,
                            apiKey: 'singularBarAPI',
                            size: 6,
                            metrics: { deploy: "Not deployed", build: "Failed" },
                        },
                        {
                            id: 7,
                            leafTitle: 'Demographic View',
                            type: 'line',
                            apiKey: 'linearMetricsAPI',
                            size: 6,
                            drillDown: {
                                drillTo: 'detail',
                            },
                            metrics: 'SOLID_STATE',
                        },
                        {
                            id: 8,
                            leafTitle: 'Cloud Providers',
                            type: 'table',
                            apiKey: 'cloudConsumeAPI',
                            size: 3,
                            drillDown: {
                                drillTo: 'detail',
                            },
                            columns: [
                                { name: 'S/N' },
                                { name: 'Instance', },
                                { name: 'Age', },
                                { name: 'Location', },
                                { name: 'Level', },
                            ],
                            metrics: 'TABLE_STATE',

                        },
                        {
                            id: 10,
                            leafTitle: 'Consumers',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'EWES_STATE',
                        },
                        {
                            id: 9,
                            leafTitle: 'Instances',
                            type: 'datatable',
                            apiKey: 'dataTableSummaryAPI',
                            size: 12,
                            drillDown: {
                                drillTo: 'detail',
                            },
                            metrics: { contain: 'instance data' },
                            columns: [
                                { name: 'S/N' },
                                { name: 'Name', },
                                { name: 'Age', },
                                { name: 'Location', },
                                { name: 'Level', },
                                { name: 'mood', },
                                { name: 'Status', type: 'progress' },
                                { name: 'Action', type: 'drill-down', onColumnIndex: 1 }
                            ]
                        },
                    ]
                },
                {
                    subNodeTitle: 'RedShift',
                    leafs: [
                        {
                            leafTitle: 'Cost Refactor',
                            type: 'tab',
                            tabs: [
                                {
                                    id: 6544,
                                    leafTitle: 'Cost by region',
                                    type: 'datatable',
                                    apiKey: 'testMetricAPI',
                                    size: 12,
                                    metrics: { contain: 'instance data' },
                                    columns: [
                                        { name: 'Alert Type', key: 'alertType', },
                                        { name: 'Instance ID', key: 'instanceId' },
                                        { name: 'Current Instance Type', key: 'current' },
                                        { name: 'Suggested Instance Type', key: 'suggested' },
                                        { name: 'Resource Id', key: 'resourceId', },
                                        { name: 'Usage Date', key: 'usageDate', },
                                        { name: 'Current Cost', key: 'costMtm', },
                                        { name: 'variance', key: 'variance', },
                                        {
                                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal',
                                            modalTitle: 'ELB Scale In/Out',
                                            drillParams: [
                                                { key: 'resourceId', display: true },
                                            ],
                                            componentsAPIKey: 'getScaleInOutAPI',
                                        }
                                    ]
                                },
                                {
                                    id: 43423,
                                    leafTitle: 'Cost by Service Type',
                                    type: 'datatable',
                                    apiKey: 'testMetricAPI',
                                    size: 9,
                                    columns: [
                                        { name: 'Alert Type', key: 'alertType', },
                                        { name: 'Instance ID', key: 'instanceId' },
                                        { name: 'Current Instance Type', key: 'current' },
                                        { name: 'Suggested Instance Type', key: 'suggested' },
                                        { name: 'Resource Id', key: 'resourceId', },
                                        { name: 'Usage Date', key: 'usageDate', },
                                        { name: 'Current Cost', key: 'costMtm', },
                                        { name: 'variance', key: 'variance', },
                                        {
                                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal',
                                            modalTitle: 'Update Instance Type',
                                            drillParams: [
                                                { key: 'instanceId', display: true },
                                                { key: 'current' },
                                                { key: 'suggested', display: true },
                                                { key: 'costMtm', display: true },
                                                { key: 'resourceId', display: true },
                                            ],
                                            componentsAPIKey: 'getInstanceStatesAPI',
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            id: 11,
                            leafTitle: 'RedShift Spending',
                            type: 'summary',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: 'DEPLOYER_RS',

                        },
                        {
                            id: 12, leafTitle: 'Red shift Spending',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            metrics: 'CONTAINER_RS',
                        },
                        {
                            id: 13, leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_RS',

                        },
                        {
                            id: 14, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar',
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_RS',

                        },
                        {
                            id: 15, leafTitle: 'Top 10 Services by Network',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'SERVICE_RS',

                        }
                    ]
                }
            ],

        },
        {
            nodeTitle: 'GCP',
            subNode: [
                {
                    subNodeTitle: 'AppEngine',
                    leafs: [
                        {
                            id: 16, leafTitle: 'AppEngine Spending',
                            type: 'summary',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: 'DEPLOYER_GCP',

                        },
                        {
                            id: 17, leafTitle: 'BigQuery Spending',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            metrics: 'CONTAINER_GCP',

                        },
                        {
                            id: 18, leafTitle: 'Spending By Region',
                            type: 'pie', isPro: true,
                            apiKey: 'statusFlemsAPI',
                            size: 3,
                            metrics: 'APP_STATE',

                        },
                        {
                            id: 19, leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_GCP',

                        }
                    ]
                },
                {
                    subNodeTitle: 'Kubernetes',
                    leafs: [
                        {
                            id: 20, leafTitle: 'K8 Spending',
                            type: 'summary',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: 'DEPLOYER_K8',

                        },
                        {
                            id: 21, leafTitle: 'Docker Spending',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            metrics: 'CONTAINER_K8',

                        },
                        {
                            id: 22, leafTitle: 'Spending By Docker',
                            type: 'pie', isPro: true,
                            apiKey: 'distributionServiceAPI',
                            size: 3,
                            metrics: 'Dock_STATE',

                        },
                        {
                            id: 23, leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_K8',

                        },
                        {
                            leafTitle: 'Cost Refactor',
                            type: 'tab',
                            tabs: [
                                {
                                    id: 1121,
                                    leafTitle: 'Instances',
                                    type: 'datatable',
                                    apiKey: 'dataTableSummaryAPI',
                                    size: 12,
                                    metrics: { contain: 'instance data' },
                                    columns: [
                                        { name: 'S/N', key: 'id', },
                                        { name: 'Instance', key: 'name' },
                                        { name: 'Location', key: 'location' },
                                        { name: 'Type', key: 'level' },
                                        { name: 'Status', key: 'status', type: 'progress' },
                                    ]
                                },
                                {
                                    id: 11214,
                                    leafTitle: 'Cost by Service Type',
                                    type: 'datatable',
                                    apiKey: 'testMetricAPI',
                                    size: 12,
                                    columns: [
                                        { name: 'Alert Type', key: 'alertType', },
                                        { name: 'Instance ID', key: 'instanceId' },
                                        { name: 'Current Instance Type', key: 'current' },
                                        { name: 'Suggested Instance Type', key: 'suggested' },
                                        { name: 'Resource Id', key: 'resourceId', },
                                        { name: 'Usage Date', key: 'usageDate', },
                                        { name: 'Current Cost', key: 'costMtm', },
                                        { name: 'variance', key: 'variance', },
                                        {
                                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal',
                                            modalTitle: 'Update Instance Type',
                                            drillParams: [
                                                { key: 'instanceId', display: true },
                                                { key: 'current' },
                                                { key: 'suggested', display: true },
                                                { key: 'costMtm', display: true },
                                                { key: 'resourceId', display: true },
                                            ],
                                            componentsAPIKey: 'getInstanceStatesAPI',
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            id: 24, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar',
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_K8',

                        },
                        {
                            id: 25, leafTitle: 'Top 10 Services by Network',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'SERVICE_K8',

                        }
                    ]
                }
            ],
        },
        {
            nodeTitle: 'Azure',
            subNode: [
                {
                    subNodeTitle: 'Kafka',
                    leafs: [
                        {
                            id: 26, leafTitle: 'Kafka Spending',
                            type: 'summary',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: 'DEPLOYER_MS',

                        },
                        {
                            id: 27, leafTitle: 'Spending View',
                            type: 'line',
                            apiKey: 'linearMetricsAPI',
                            size: 6,
                            metrics: 'MS_STATE',

                        },
                        {
                            id: 28, leafTitle: 'Kafka Expends',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            metrics: 'CONTAINER_MS',

                        },
                        {
                            id: 29, leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_MS',

                        },
                        {
                            id: 30, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar',
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_MS',

                        },
                        {
                            id: 31, leafTitle: 'Top 10 Services by Network',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'SERVICE_MS',

                        }
                    ]
                },
                {
                    subNodeTitle: 'B2C',
                    leafs: [
                        {
                            id: 32, leafTitle: 'B2C Spending',
                            type: 'summary',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: 'DEPLOYER_B2C',

                        },
                        {
                            id: 33, leafTitle: 'B2C Invest',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            metrics: 'CONTAINER_B2C',

                        },
                        {
                            id: 34, leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_B2C',

                        },
                        {
                            id: 35, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar',
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_B2C',

                        },
                        {
                            leafTitle: 'Cost Refactor',
                            type: 'tab',
                            size: 12,
                            tabs: [
                                {
                                    id: 1223,
                                    leafTitle: 'TCP',
                                    type: 'datatable',
                                    apiKey: 'dataTableSummaryAPI',
                                    size: 12,
                                    noDataText: 'No TCP Info',
                                    metrics: { contain: 'instance data' },
                                    defaultRowPerPage: 8,
                                    hideToolBar: true,
                                    columns: [
                                        { name: 'S/N', key: 'id', },
                                        { name: 'Instance', key: 'name' },
                                        { name: 'Age', key: 'age' },
                                        { name: 'Location', key: 'location' },
                                        { name: 'Type', key: 'level' },
                                        { name: 'mood', key: 'mood' },
                                        { name: 'Status', key: 'status', type: 'progress' },
                                        {
                                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'costdashboard',
                                            defSelectTabIndex: { nodeIndex: 1, subNodeIndex: 1, tabIndex: 1 }
                                        }
                                    ]
                                },
                                {
                                    id: 1433,
                                    leafTitle: 'UDP',
                                    type: 'datatable',
                                    apiKey: 'dataTableSummaryAPI',
                                    size: 12,
                                    metrics: { contain: 'instance data' },
                                    columns: [
                                        { name: 'Instance', key: 'name' },
                                        { name: 'Location', key: 'location' },
                                        { name: 'Type', key: 'level' },
                                        { name: 'Status', key: 'status', type: 'progress' },
                                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5 }
                                    ]
                                },
                                {
                                    id: 1115,
                                    leafTitle: 'KMP',
                                    type: 'datatable',
                                    apiKey: 'dataTableSummaryAPI',
                                    size: 12,
                                    metrics: { contain: 'instance data' },
                                    columns: [
                                        { name: 'Types', key: 'name' },
                                        { name: 'Places', key: 'location' },
                                        { name: 'Level', key: 'level' },
                                        { name: 'Indicator', key: 'status', type: 'progress' },
                                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5 }
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    subNodeTitle: 'Azure ML',
                    leafs: [
                        {
                            id: 37, leafTitle: 'Azure ML Spending',
                            type: 'summary',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: 'DEPLOYER_Azure_ML',

                        },
                        {
                            id: 38, leafTitle: 'Spending By Region',
                            type: 'pie', isPro: true,
                            apiKey: 'statusFlemsAPI',
                            size: 3,
                            metrics: 'B2C_STATE',
                        },
                        {
                            id: 39, leafTitle: 'Spending By Distribution',
                            type: 'pie', isPro: true,
                            apiKey: 'distributionServiceAPI',
                            size: 3,
                            metrics: 'B2C_STATE',
                        },
                        {
                            id: 40, leafTitle: 'Azure ML Invest',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            metrics: 'CONTAINER_Azure_ML',
                        },
                        {
                            id: 41, leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_Azure_ML',
                        },
                        {
                            id: 42, leafTitle: 'Performance View',
                            type: 'line',
                            apiKey: 'linearMetricsAPI',
                            size: 6,
                            metrics: 'Line_STATE',
                        },
                        {
                            id: 43, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar',
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_Azure_ML',
                        },
                        {
                            id: 44, leafTitle: 'Top 10 Services by Network',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: { status: "Not Started", cluster: "8 Nodes" },
                        },
                        {
                            id: 45, leafTitle: 'Cloud Providers',
                            type: 'table',
                            apiKey: 'cloudConsumeAPI',
                            columns: [
                                { name: 'S/N' },
                                { name: 'Instance', },
                                { name: 'Age', },
                                { name: 'Location', },
                                { name: 'Level', },
                            ],
                            size: 3,
                            metrics: 'TEST_STATE',
                        },
                    ]
                }
            ],
        }
    ];
}


function componentsData() {
    return [
        {
            leafs: [
                {
                    id: 1,
                    leafTitle: 'EC2 Spending',
                    type: 'summaryGraph',
                    apiKey: 'summaryFlemingoAPI',
                    size: 3,
                    drillDown: {
                        drillTo: 'costdashboard',
                        defSelectTabIndex: { nodeIndex: 2, subNodeIndex: 1, tabIndex: 1 }
                    },
                    metrics: { deploy: "Mounted", build: "Released" },
                    noDataText: 'Summary data is not currently available',
                },
                {
                    id: 114,
                    leafTitle: 'Cost by Service Type',
                    type: 'datatable',
                    apiKey: 'testMetricAPI',
                    size: 9,
                    noDataText: 'Data for Cost by Service Type is not currently available',
                    columns: [
                        { name: 'Alert Type', key: 'alertType', },
                        { name: 'Instance ID', key: 'instanceId' },
                        { name: 'Current Instance Type', key: 'current' },
                        { name: 'Suggested Instance Type', key: 'suggested' },
                        { name: 'Resource Id', key: 'resourceId', },
                        { name: 'Usage Date', key: 'usageDate', },
                        { name: 'Current Cost', key: 'costMtm', },
                        { name: 'variance', key: 'variance', },
                        {
                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal',
                            modalTitle: 'Update Instance Type',
                            drillParams: [
                                { key: 'instanceId', display: true },
                                { key: 'current' },
                                { key: 'suggested', display: true },
                                { key: 'costMtm', display: true },
                                { key: 'resourceId', display: true },
                            ],
                            componentsAPIKey: 'getInstanceStatesAPI',
                        }
                    ]
                },
                {
                    id: 10,
                    leafTitle: 'Manage Schedule',
                    type: 'datatable',
                    apiKey: 'dataTableSummaryAPI',
                    size: 12,
                    metrics: { contain: 'instance data' },
                    columns: [
                        { name: 'S/N', key: 'id', },
                        { name: 'Instance', key: 'name' },
                        { name: 'Location', key: 'location' },
                        { name: 'Type', key: 'level' },
                        { name: 'Status', key: 'status', type: 'progress' },
                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'schedule', drillParams: [{ key: 'name' }] }
                    ]
                },
                {
                    id: 2,
                    leafTitle: 'EC2 shift Spending',
                    type: 'summary',
                    noDataText: 'No Summary Info',
                    apiKey: 'costsFlemingoAPI',
                    size: 3,
                    metrics: 'CONTAINER',
                },
                {
                    id: 4,
                    leafTitle: 'Spending By Distribution',
                    type: 'pie', isPro: true,
                    noDataText: 'No distribution Info',
                    apiKey: 'distributionServiceAPI',
                    size: 3,
                    metrics: 'EWES_STATE',

                },
                {
                    id: 132,
                    leafTitle: 'Top 10 Instance',
                    type: 'bar',
                    noDataText: 'No Instance Info',
                    singular: true,
                    apiKey: 'singularBarAPI',
                    size: 6,
                    metrics: { deploy: "Not deployed", build: "Failed" },
                },
                {
                    leafTitle: 'Cost Refactor',
                    type: 'tab',
                    size: 12,
                    tabs: [
                        {
                            id: 13,
                            leafTitle: 'TCP',
                            type: 'datatable',
                            apiKey: 'dataTableSummaryAPI',
                            size: 12,
                            noDataText: 'No TCP Info',
                            metrics: { contain: 'instance data' },
                            defaultRowPerPage: 8,
                            hideToolBar: true,
                            columns: [
                                { name: 'S/N', key: 'id', },
                                { name: 'Instance', key: 'name' },
                                { name: 'Age', key: 'age' },
                                { name: 'Location', key: 'location' },
                                { name: 'Type', key: 'level' },
                                { name: 'mood', key: 'mood' },
                                { name: 'Status', key: 'status', type: 'progress' },
                                {
                                    name: 'Action', key: 'action', type: 'drill-down', drillTo: 'costdashboard',
                                    defSelectTabIndex: { nodeIndex: 1, subNodeIndex: 1, tabIndex: 1 }
                                }
                            ]
                        },
                        {
                            id: 14,
                            leafTitle: 'UDP',
                            type: 'datatable',
                            apiKey: 'dataTableSummaryAPI',
                            size: 6,
                            metrics: { contain: 'instance data' },
                            columns: [
                                { name: 'Instance', key: 'name' },
                                { name: 'Location', key: 'location' },
                                { name: 'Type', key: 'level' },
                                { name: 'Status', key: 'status', type: 'progress' },
                                { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5 }
                            ]
                        },
                        {
                            id: 15,
                            leafTitle: 'KMP',
                            type: 'datatable',
                            apiKey: 'dataTableSummaryAPI',
                            size: 12,
                            metrics: { contain: 'instance data' },
                            columns: [
                                { name: 'Types', key: 'name' },
                                { name: 'Places', key: 'location' },
                                { name: 'Level', key: 'level' },
                                { name: 'Indicator', key: 'status', type: 'progress' },
                                { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5 }
                            ]
                        },
                    ]
                },
                {
                    id: 5,
                    leafTitle: 'Top 10 Services by Memory',
                    type: 'bar',
                    noDataText: 'No Services Info',
                    apiKey: 'accomodationsyFlemingoAPI',
                    size: 3,
                    metrics: { deploy: "Not deployed", build: "Failed" },

                },
                {
                    id: 12,
                    leafTitle: 'Top 10 Services by Instance',
                    type: 'bar',
                    singular: true,
                    apiKey: 'singularBarAPI',
                    size: 6,
                    metrics: { deploy: "Not deployed", build: "Failed" },
                },
                {
                    id: 6,
                    leafTitle: 'Top 10 Services by CPU',
                    type: 'bar',
                    apiKey: 'awsSpendingFlemingoAPI',
                    size: 3,
                    metrics: 'SOLID_STATE',

                },
                {
                    id: 7,
                    leafTitle: 'Demographic View',
                    type: 'line',
                    noDataText: 'No Demographic Info',
                    apiKey: 'linearMetricsAPI',
                    size: 6,
                    metrics: 'SOLID_STATE',

                },
                {
                    id: 8,
                    leafTitle: 'Cloud Providers',
                    type: 'table',
                    noDataText: 'No Cloud Providers Info available',
                    columns: [
                        { name: 'S/N' },
                        { name: 'Instance', },
                        { name: 'Age', },
                        { name: 'Location', },
                        { name: 'Level', },
                    ],
                    apiKey: 'cloudConsumeAPI',
                    size: 3,
                    metrics: 'TABLE_STATE',
                },
                {
                    id: 9,
                    leafTitle: 'Top 5 Consumers',
                    type: 'bar',
                    apiKey: 'awsSpendingFlemingoAPI',
                    size: 3,
                    metrics: 'ESCS_STATE',
                },

                {
                    id: 10,
                    leafTitle: 'Instances',
                    type: 'datatable',
                    apiKey: 'dataTableSummaryAPI',
                    size: 6,
                    metrics: { contain: 'instance data' },
                    columns: [
                        { name: 'Instance', key: 'name' },
                        { name: 'Age', key: 'age' },
                        { name: 'mood', key: 'mood' },
                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5 }
                    ]
                },
                {
                    id: 11,
                    leafTitle: 'Instances',
                    type: 'datatable',
                    apiKey: 'dataTableSummaryAPI',
                    size: 6,
                    metrics: { contain: 'instance data' },
                    columns: [
                        { name: 'S/N', key: 'id', },
                        { name: 'Instance', key: 'name' },
                        { name: 'Location', key: 'location' },
                        { name: 'Type', key: 'level' },
                        { name: 'Status', key: 'status', type: 'progress' },
                    ]
                },
            ]
        },
    ];
}

function drillDownData() {
    return [
        {
            leafs: [
                {
                    id: 1099,
                    leafTitle: 'Resource details',
                    subTitle: 'Insight about selected resource',
                    type: 'textDetail',
                    apiKey: 'resourceSummaryAPI',
                    size: 12,
                    metrics: { deploy: "Mounted", build: "Released" },
                    noDataText: 'Summary resource data is not currently available',
                },
                {
                    id: 1,
                    leafTitle: 'EC2 Spending',
                    type: 'summaryGraph',
                    apiKey: 'summaryFlemingoAPI',
                    size: 3,
                    drillDown: {
                        drillTo: 'costdashboard',
                        defSelectTabIndex: { nodeIndex: 2, subNodeIndex: 1, tabIndex: 1 }
                    },
                    metrics: { deploy: "Mounted", build: "Released" },
                    noDataText: 'Summary info for this resource is not currently available',
                },
                {
                    id: 114,
                    leafTitle: 'Cost by Service Type',
                    type: 'datatable',
                    apiKey: 'testMetricAPI',
                    size: 9,
                    noDataText: 'Data for Cost by Service Type is not currently available',
                    columns: [
                        { name: 'Alert Type', key: 'alertType', },
                        { name: 'Instance ID', key: 'instanceId' },
                        { name: 'Current Instance Type', key: 'current' },
                        { name: 'Suggested Instance Type', key: 'suggested' },
                        { name: 'Resource Id', key: 'resourceId', },
                        { name: 'Usage Date', key: 'usageDate', },
                        { name: 'Current Cost', key: 'costMtm', },
                        { name: 'variance', key: 'variance', },
                        {
                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal',
                            modalTitle: 'Update Instance Type',
                            drillParams: [
                                { key: 'instanceId', display: true },
                                { key: 'current' },
                                { key: 'suggested', display: true },
                                { key: 'costMtm', display: true },
                                { key: 'resourceId', display: true },
                            ],
                            componentsAPIKey: 'getInstanceStatesAPI',
                        }
                    ]
                },
                {
                    id: 10,
                    leafTitle: 'Manage Schedule',
                    type: 'datatable',
                    apiKey: 'dataTableSummaryAPI',
                    size: 12,
                    metrics: { contain: 'instance data' },
                    columns: [
                        { name: 'S/N', key: 'id', },
                        { name: 'Instance', key: 'name' },
                        { name: 'Location', key: 'location' },
                        { name: 'Type', key: 'level' },
                        { name: 'Status', key: 'status', type: 'progress' },
                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'schedule', drillParams: [{ key: 'name' }] }
                    ]
                },
            ]
        },
    ];
}


function getAdministrationDashboard() {
    return [
        {
            "nodeTitle": "Administration",
            "subNode": [
                {
                    "subNodeTitle": "Manage Users",
                    "leafs": [
                        {
                            "id": 1,
                            "leafTitle": "Manage Users",
                            "type": "datatable",
                            "apiKey": "listUsersAPI",
                            "size": 12,
                            "hideToolBar": true,
                            "noDataText": "No sub-users available",
                            "metrics": {},
                            "defaultRowPerPage": 10,
                            "toolBarActions": [
                                {
                                    "toolbarTitle": "Add User",
                                    "modalTitle": "Add User",
                                    "componentsAPIKey": "addUserComponentAPI",
                                    "actionIcon": "AddBox",
                                    "drillParams": [
                                        {
                                            "key": "email"
                                        }
                                    ]
                                }
                            ],
                            "columns": [
                                {
                                    "name": "Id",
                                    "key": "userId",
                                    "display": false
                                },
                                {
                                    "name": "Email",
                                    "key": "email"
                                },
                                {
                                    "name": "Role",
                                    "key": "roleName"
                                },
                                {
                                    "name": "Status",
                                    "key": "status",
                                    "type": "status"
                                },
                                {
                                    "name": "Account",
                                    "key": "accounts"
                                },
                                {
                                    "name": "Delete",
                                    "key": "action",
                                    "type": "delete",
                                    "apiKey": "deleteUserAPI",
                                    "requestParams": [
                                        {
                                            "key": "userId"
                                        },
                                        {
                                            "key": "email"
                                        }
                                    ]
                                },
                                {
                                    "name": "Edit",
                                    "key": "action",
                                    "type": "drill-down",
                                    "drillTo": "modal",
                                    "modalTitle": "Edit user",
                                    "drillParams": [
                                        {
                                            "key": "userId"
                                        },
                                        {
                                            "key": "email"
                                        }
                                    ],
                                    "componentsAPIKey": "addUserComponentAPI"
                                }
                            ]
                        }
                    ]
                },
                {
                    "subNodeTitle": "Manage Environments",
                    "leafs": [
                        {
                            "id": 2,
                            "leafTitle": "Environments",
                            "type": "datatable",
                            "apiKey": "listUserEnvironmentsAPI",
                            "size": 12,
                            "hideToolBar": true,
                            "noDataText": "No Environments Configured",
                            "metrics": {},
                            "defaultRowPerPage": 10,
                            "toolBarActions": [
                                {
                                    "toolbarTitle": "Add New Environment",
                                    "modalTitle": "Add Environment",
                                    "componentsAPIKey": "addEditEnvironmentComponentAPI",
                                    "actionIcon": "AddBox",
                                    "drillParams": [
                                        {
                                            "key": "type",
                                            "value": "AWS"
                                        }
                                    ]
                                }
                            ],
                            "columns": [
                                {
                                    "name": "Id",
                                    "key": "id",
                                    "display": false
                                },
                                {
                                    "name": "Name",
                                    "key": "name"
                                },
                                {
                                    "name": "Type",
                                    "key": "type"
                                },
                                {
                                    "name": "Status",
                                    "key": "status"
                                },
                                {
                                    "name": "Delete",
                                    "key": "action",
                                    "type": "delete",
                                    "apiKey": "deleteEnvironmentAPI",
                                    "requestParams": [
                                        {
                                            "key": "id"
                                        }
                                    ]
                                },
                                {
                                    "name": "Edit",
                                    "key": "action",
                                    "type": "drill-down",
                                    "drillTo": "modal",
                                    "modalTitle": "Edit Environment Properties",
                                    "drillParams": [
                                        {
                                            "key": "id",
                                            "display": false
                                        },
                                        {
                                            "key": "type",
                                            "display": false
                                        }
                                    ],
                                    "componentsAPIKey": "addEditEnvironmentComponentAPI"
                                }
                            ]
                        }
                    ]
                },
                {
                    "subNodeTitle": "Manage Alerts",
                    "leafs": [
                        {
                            "id": 3,
                            "leafTitle": "Alerts",
                            "type": "datatable",
                            "apiKey": "listAlertEmailAPI",
                            "size": 12,
                            "hideToolBar": true,
                            "noDataText": "No Alertable Emails Configured",
                            "metrics": {},
                            "defaultRowPerPage": 10,
                            "toolBarActions": [
                                {
                                    "toolbarTitle": "Add Alert Email",
                                    "modalTitle": "Add new email subscription",
                                    "componentsAPIKey": "addEditAlertEmailSubcribeComponentAPI",
                                    "actionIcon": "AddBox",
                                    "drillParams": [
                                        {
                                            "key": "userId"
                                        }
                                    ]
                                }
                            ],
                            "columns": [
                                {
                                    "name": "User Id",
                                    "key": "userId",
                                    "display": false
                                },
                                {
                                    "name": "Email",
                                    "key": "email"
                                },
                                {
                                    "name": "Alerts",
                                    "key": "alertsEnabled",
                                    "type": "status"
                                },
                                {
                                    "name": "Billing",
                                    "key": "billingAlerts",
                                    "type": "status"
                                },
                                {
                                    "name": "Utilization",
                                    "key": "utilizationAlerts",
                                    "type": "status"
                                },
                                {
                                    "name": "Action",
                                    "key": "actionAlerts",
                                    "type": "status"
                                },
                                {
                                    "name": "Kubernetes",
                                    "key": "kubernetesAlerts",
                                    "type": "status"
                                },
                                {
                                    "name": "Subscription Status",
                                    "key": "emailStatus"
                                },
                                {
                                    "name": "Delete",
                                    "key": "action",
                                    "type": "delete",
                                    "apiKey": "deleteEmailAlertPrefAPI",
                                    "requestParams": [
                                        {
                                            "key": "email"
                                        },
                                        {
                                            "key": "userId"
                                        }
                                    ]
                                },
                                {
                                    "name": "Edit",
                                    "key": "action",
                                    "type": "drill-down",
                                    "drillTo": "modal",
                                    "modalTitle": "Edit subscription preferences",
                                    "drillParams": [
                                        {
                                            "key": "email",
                                            "display": false
                                        },
                                        {
                                            "key": "userId"
                                        }
                                    ],
                                    "componentsAPIKey": "addEditAlertEmailSubcribeComponentAPI"
                                }
                            ]
                        }
                    ]
                },
                {
                    "subNodeTitle": "Manage Thresholds",
                    "leafs": [
                        {
                            "id": 4,
                            "leafTitle": "",
                            "type": "tab",
                            "size": 12,
                            "tabs": [
                                {
                                    "id": 14,
                                    "leafTitle": "Idle Instances",
                                    "type": "datatable",
                                    "apiKey": "listThresholdsAPI",
                                    "size": 12,
                                    "metrics": {
                                        "types": [
                                            "IDLE_INSTANCES"
                                        ]
                                    },
                                    "defaultRowPerPage": 10,
                                    "hideToolBar": true,
                                    "noDataText": "No Thresholds available",
                                    "toolBarActions": [
                                        {
                                            "toolbarTitle": "Edit Thresholds",
                                            "modalTitle": "Edit Thresholds",
                                            "componentsAPIKey": "editAlertThresholdsComponentAPI",
                                            "actionIcon": "EditPencil",
                                            "drillParams": [
                                                {
                                                    "key": "type",
                                                    "value": "IDLE_INSTANCES"
                                                }
                                            ]
                                        }
                                    ],
                                    "columns": [
                                        {
                                            "name": "Component",
                                            "key": "component",
                                            "display": false
                                        },
                                        {
                                            "name": "Type",
                                            "key": "type",
                                            "display": false
                                        },
                                        {
                                            "name": "Metric",
                                            "key": "strThreshold"
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold"
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold"
                                        }
                                    ]
                                },
                                {
                                    "id": 15,
                                    "leafTitle": "Reserved Instances",
                                    "type": "datatable",
                                    "apiKey": "listThresholdsAPI",
                                    "size": 12,
                                    "metrics": {
                                        "types": [
                                            "RESERVED_INSTANCES"
                                        ]
                                    },
                                    "defaultRowPerPage": 10,
                                    "hideToolBar": true,
                                    "noDataText": "No Thresholds available",
                                    "toolBarActions": [
                                        {
                                            "toolbarTitle": "Edit Thresholds",
                                            "modalTitle": "Edit Thresholds",
                                            "componentsAPIKey": "editAlertThresholdsComponentAPI",
                                            "actionIcon": "EditPencil",
                                            "drillParams": [
                                                {
                                                    "key": "type",
                                                    "value": "RESERVED_INSTANCES"
                                                }
                                            ]
                                        }
                                    ],
                                    "columns": [
                                        {
                                            "name": "Component",
                                            "key": "component",
                                            "display": false
                                        },
                                        {
                                            "name": "Type",
                                            "key": "type",
                                            "display": false
                                        },
                                        {
                                            "name": "Metric",
                                            "key": "strThreshold"
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold"
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold"
                                        }
                                    ]
                                },
                                {
                                    "id": 16,
                                    "leafTitle": "Spot Instances",
                                    "type": "datatable",
                                    "apiKey": "listThresholdsAPI",
                                    "size": 12,
                                    "metrics": {
                                        "types": [
                                            "SPOT_CANDIDATES"
                                        ]
                                    },
                                    "defaultRowPerPage": 10,
                                    "hideToolBar": true,
                                    "noDataText": "No Thresholds available",
                                    "toolBarActions": [
                                        {
                                            "toolbarTitle": "Edit Thresholds",
                                            "modalTitle": "Edit Thresholds",
                                            "componentsAPIKey": "editAlertThresholdsComponentAPI",
                                            "actionIcon": "EditPencil",
                                            "drillParams": [
                                                {
                                                    "key": "type",
                                                    "value": "SPOT_CANDIDATES"
                                                }
                                            ]
                                        }
                                    ],
                                    "columns": [
                                        {
                                            "name": "Component",
                                            "key": "component",
                                            "display": false
                                        },
                                        {
                                            "name": "Type",
                                            "key": "type",
                                            "display": false
                                        },
                                        {
                                            "name": "Metric",
                                            "key": "strThreshold"
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold"
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold"
                                        }
                                    ]
                                },
                                {
                                    "id": 17,
                                    "leafTitle": "Instance Type Change",
                                    "type": "datatable",
                                    "apiKey": "listThresholdsAPI",
                                    "size": 12,
                                    "metrics": {
                                        "types": [
                                            "INSTNACE_TYPE_CHANGE"
                                        ]
                                    },
                                    "defaultRowPerPage": 10,
                                    "hideToolBar": true,
                                    "noDataText": "No Thresholds available",
                                    "toolBarActions": [
                                        {
                                            "toolbarTitle": "Edit Thresholds",
                                            "modalTitle": "Edit Thresholds",
                                            "componentsAPIKey": "editAlertThresholdsComponentAPI",
                                            "actionIcon": "EditPencil",
                                            "drillParams": [
                                                {
                                                    "key": "type",
                                                    "value": "INSTNACE_TYPE_CHANGE"
                                                }
                                            ]
                                        }
                                    ],
                                    "columns": [
                                        {
                                            "name": "Component",
                                            "key": "component",
                                            "display": false
                                        },
                                        {
                                            "name": "Type",
                                            "key": "type",
                                            "display": false
                                        },
                                        {
                                            "name": "Metric",
                                            "key": "strThreshold"
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold"
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold"
                                        }
                                    ]
                                },
                                {
                                    "id": 18,
                                    "leafTitle": "Hourly Blackout",
                                    "type": "datatable",
                                    "apiKey": "listThresholdsAPI",
                                    "size": 12,
                                    "metrics": {
                                        "types": [
                                            "HOURLY_BLACKOUT"
                                        ]
                                    },
                                    "defaultRowPerPage": 10,
                                    "hideToolBar": true,
                                    "noDataText": "No Thresholds available",
                                    "toolBarActions": [
                                        {
                                            "toolbarTitle": "Edit Thresholds",
                                            "modalTitle": "Edit Thresholds",
                                            "componentsAPIKey": "editAlertThresholdsComponentAPI",
                                            "actionIcon": "EditPencil",
                                            "drillParams": [
                                                {
                                                    "key": "type",
                                                    "value": "HOURLY_BLACKOUT"
                                                }
                                            ]
                                        }
                                    ],
                                    "columns": [
                                        {
                                            "name": "Component",
                                            "key": "component",
                                            "display": false
                                        },
                                        {
                                            "name": "Type",
                                            "key": "type",
                                            "display": false
                                        },
                                        {
                                            "name": "Metric",
                                            "key": "strThreshold"
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold"
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
}


function getManageUsersData() {
    return [
        {
            leafs: [
                {
                    id: 1,
                    leafTitle: 'Admin Profile',
                    type: 'datatable',
                    apiKey: 'listUsersAPI',
                    size: 12,
                    hideToolBar: true,
                    noDataText: 'Unable to fetch user information',
                    metrics: { contain: 'instance data' },
                    defaultRowPerPage: 8,
                    toolBarActions: [
                        {
                            toolbarTitle: 'Add User',
                            modalTitle: 'Add User',
                            componentsAPIKey: 'addUserComponentAPI',
                            actionIcon: 'AddBox',
                            drillParams: [
                                { key: 'email' },
                            ],
                        },
                    ],
                    columns: [
                        { name: 'Email', key: 'email', },
                        { name: 'Role', key: 'role', },
                        { name: 'Account', key: 'accounts', },
                        {
                            name: 'Delete', key: 'action', type: 'delete', apiKey: 'deleteUserAPI',
                            requestParams: [
                                { key: 'email' },
                                { key: 'role' },
                                { key: 'accounts' }
                            ]
                        },
                        {
                            name: 'Edit', key: 'action', type: 'drill-down', drillTo: 'modal',
                            modalTitle: 'Edit user',
                            drillParams: [
                                { key: 'email' },
                                { key: 'role' },
                                { key: 'accounts' }
                            ],
                            componentsAPIKey: 'addUserComponentAPI',
                        }
                    ]
                },
            ]
        }
    ]
}

function getGroupUIData() {
    return [{
        leafs: [
            {
                id: 4324324,
                leafTitle: 'Manage Group',
                type: 'datatable',
                apiKey: 'fetchGroupsAPI',
                size: 12,
                hideToolBar: true,
                toolBarActions: [
                    {
                        toolbarTitle: 'Auto Group',
                        modalTitle: 'Auto Group',
                        componentsAPIKey: 'autoGroupAPI',
                        actionIcon: 'SettingsIcon',
                        drillParams: [
                            { key: 'name' },
                        ],
                    },
                    {
                        toolbarTitle: 'Add Group',
                        modalTitle: 'Add Group',
                        componentsAPIKey: 'addGroupAPI',
                        actionIcon: 'AddBox',
                        drillParams: [
                            { key: 'name' },
                        ],
                    },
                ],
                columns: [
                    { name: 'Group name', key: 'name' },
                    { name: 'Type', key: 'type', },
                    { name: 'Status', key: 'status', },
                    { name: 'Resource Count', key: 'rescount', },
                    {
                        name: 'Edit Group', key: 'action', type: 'drill-down', drillTo: 'modal',
                        modalTitle: 'Edit group',
                        drillParams: [
                            { key: 'name', display: true },
                            { key: 'status', display: true },
                        ],
                        componentsAPIKey: 'addGroupAPI',
                    },
                    {
                        "name": "Delete",
                        "key": "action",
                        "type": "delete",
                        "apiKey": "deleteUserAPI",
                        "requestParams": [
                            {
                                "key": "name"
                            },
                            {
                                "key": "status"
                            }
                        ]
                    },
                ],
            },
        ]
    }]
}

function manageGroup() {
    return [
        {
            actionAPIKey: 'saveGroupAPI',
            leafs: [
                {
                    id: 1,
                    leafTitle: 'Name',
                    type: 'text-input',
                    inputType: 'string',
                    defSelectKey: 'name',
                    helperText: 'Name of the group',
                    metrics: '{ "name" : "user_group"}',
                },
                {
                    id: 7,
                    defSelectKey: "gropuResourcesList",
                    leafTitle: 'Group Resources',
                    type: 'datatable',
                    noDataText: 'Group Resources can\'t be retrieved',
                    apiKey: "testMetricAPI",
                    size: 12,
                    selectableRows: true,
                    columns: [
                        { name: 'Alert Type', key: 'alertType', isRowSelection: true },
                        { name: 'Instance ID', key: 'instanceId', isRowSelection: true },
                        { name: 'Current Instance Type', key: 'current' },
                        { name: 'Suggested Instance Type', key: 'suggested' },
                        { name: 'Resource Id', key: 'resourceId', isRowSelection: true },
                        { name: 'Usage Date', key: 'usageDate', },
                        { name: 'Current Cost', key: 'costMtm', },
                        { name: 'variance', key: 'variance', },
                    ],
                },
            ]
        }
    ];
}

function autoGroup() {
    return [
        {
            actionAPIKey: 'saveGroupAPI',
            leafs: [
                {
                    id: 1,
                    leafTitle: 'Name',
                    type: 'text-input',
                    inputType: 'string',
                    "size": 6,
                    defSelectKey: 'name',
                    helperText: 'Name of the group',
                    metrics: '{ "name" : "user_group"}',
                },
                {
                    "id": 2,
                    "leafTitle": "Generated Auto Groups",
                    "size": 12,
                    "type": "nested-field-selector",
                    "apiKey": "listGroupTypesAPI",
                    "defSelectKey": "selectedThresholds",
                    inputList: [
                        {
                            id: "v1",
                            label: "Exclude list:",
                            type: 'text',
                        }
                    ],
                    "metrics": {}
                },
            ]
        }
    ];
}


//Simple request time logger in middleWare
app.use('/', function (req, res, next) {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    next();
});

app.options("*", function (req, res) {
    res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
    res.header("Access-Control-Allow-Headers", "authorization,content-type");
    res.status(200).end();
});

// Mock API for the Global filters
app.post('/api/filters/datafilter', function (req, res) {

    const FILTER_LIST = [
        {
            "key": "Instance State",
            "value": [
                "running",
                "stopped",
                "active"
            ]
        },
        {
            "key": "Instance Types",
            "value": [
                "t2.small",
                "t2.nano",
                "t2.micro",
                "t2.large",
                "t3.nano",
                "t3.large",
                "m5.xlarge",
                "t3.medium",
                "t2.medium"
            ]
        },
        {
            "key": "Regions",
            "value": [
                "us-east-1",
                "us-east-2",
                "us-west-1",
                "us-west-2"
            ]
        },
        {
            "key": "Tags",
            "value": [
                "DevTest",
                "Nginx",
                "AquilaPredictionService",
                "demo v0.1",
                "NginxCassandra",
                "sfr-a1fb7b1a-fbd4-498e-877a-ce3717a63621",
                "DOCKER KUBERNETES",
                "NANOCLUSTER2",
                "Aquila DB Server",
                "NEW AQUILA APP SERVER",
                "AQUILA-PREDICTION SERVICE",
                "CXN 1",
                "VM1 EXPERIMENTAL CASSANDRA CLUSTER",
                "NANO3",
                "NANOCLUSTER",
                "DOCKER1",
                "SampleSpotInstance",
                "WindowsDevTest",
                "VM2 EXPERIMENTAL CASSANDRA CLUSTER",
                "CassandraNode",
                "RI-1",
                "Main Web Server",
                "CassandraNode2"
            ]
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Content-Type', 'application/json');
    res.send(FILTER_LIST);
});


// Mock API for the Global TIME filters.
app.post('/api/filters/timefilter', function (req, res) {

    const TIME_FILTER_LIST = [
        'All',
        '1 Hour',
        '8 Hours',
        '24 Hours',
        'This Week',
        'Last Week',
        'Last 30 Days',
        'This Month',
        'Last 6 Months',
        '1 Year',
        'Custom',
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Content-Type', 'application/json');
    res.send(TIME_FILTER_LIST);
});

//Mock API for the Linear chart Visualization components.
app.post('/data/1', function (req, res) {
    var data = [];

    switch (req.query.time_filter) {

        case "Last 30 Days":
            data = [
                { name: 'June 1', "Optimal Cost": 40, "Real Cost": 20, },
                { name: 'June 2', "Optimal Cost": 30, "Real Cost": 18, },
                { name: 'June 3', "Optimal Cost": 20, "Real Cost": 90, },
                { name: 'June 4', "Optimal Cost": 27, "Real Cost": 38, },
                { name: 'June 5', "Optimal Cost": 18, "Real Cost": 40, },
                { name: 'June 28', "Optimal Cost": 30, "Real Cost": 50, },
                { name: 'June 29', "Optimal Cost": 20, "Real Cost": 60, },
                { name: 'June 30', "Optimal Cost": 40, "Real Cost": 55, },
                { name: 'June 31', "Optimal Cost": 30, "Real Cost": 50, },
                { name: 'July 1', "Optimal Cost": 40, "Real Cost": 20, },
                { name: 'July 2', "Optimal Cost": 30, "Real Cost": 18, },
                { name: 'July 3', "Optimal Cost": 20, "Real Cost": 90, },
                { name: 'July 4', "Optimal Cost": 27, "Real Cost": 38, },
                { name: 'July 5', "Optimal Cost": 18, "Real Cost": 40, },
                { name: 'July 6', "Optimal Cost": 23, "Real Cost": 30, "Predictable Cost": 30 },
                { name: 'July 7', "Predictable Cost": 50 },
                { name: 'July 8', "Predictable Cost": 55 },
            ];
            break;
        case "Last Week":
            data = [
                { name: 'June 1', "Optimal Cost": 40, "Real Cost": 20, },
                { name: 'June 2', "Optimal Cost": 35, "Real Cost": 76, },
                { name: 'June 3', "Optimal Cost": 20, "Real Cost": 90, },
                { name: 'June 4', "Optimal Cost": 27, "Real Cost": 38, },
                { name: 'June 5', "Optimal Cost": 53, "Real Cost": 40, },
            ];
            break;
        case "This Week":
            data = [
                { name: 'Aug 1', "Optimal Cost": 45, "Real Cost": 27, },
                { name: 'Aug 2', "Optimal Cost": 35, "Real Cost": 17, },
                { name: 'Aug 3', "Optimal Cost": 25, "Real Cost": 97, },
                { name: 'Aug 4', "Optimal Cost": 25, "Real Cost": 37, },
                { name: 'Aug 5', "Optimal Cost": 15, "Real Cost": 47, },
            ];
            break;
        default:
            data = [
                { name: 'Sep 1', "Optimal Cost": 455, "Real Cost": 247, },
                { name: 'Sep 2', "Optimal Cost": 355, "Real Cost": 147, },
                { name: 'Sep 3', "Optimal Cost": 255, "Real Cost": 947, },
                { name: 'Sep 4', "Optimal Cost": 255, "Real Cost": 347, },
                { name: 'Sep 5', "Optimal Cost": 155, "Real Cost": 447, },
            ];
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
});


app.post('/data/2', function (req, res) {
    var data = [];
    for (let index = 0; index < 999999999; index++) {

    }
    switch (req.query.time_filter) {

        case "Last 30 Days":
            data = [
                { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { name: '20-30', CPU: 120, Network: 58, Disk: 50 },
                { name: '30-40', CPU: 75, Network: 20, Disk: 46 },
                { name: '40-50', CPU: 25, Network: 58, Disk: 65 },
                { name: '50-60', CPU: 20, Network: 120, Disk: 40 },
                { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { name: '80-90', CPU: 45, Network: 80, Disk: 50 },
                { name: '90+', CPU: 10, Network: 20, Disk: 15 },
            ];
            break;
        case "Last Week":
            data = [
                { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { name: '20-30', CPU: 120, Network: 58, Disk: 50 },
                { name: '30-40', CPU: 75, Network: 20, Disk: 46 },
                { name: '40-50', CPU: 25, Network: 58, Disk: 65 },
                { name: '50-60', CPU: 20, Network: 120, Disk: 40 },
                { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { name: '80-90', CPU: 45, Network: 80, Disk: 50 },
                { name: '90+', CPU: 10, Network: 20, Disk: 15 },
            ];
            break;
        case "This Week":
            data = [
                { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { name: '20-30', CPU: 120, Network: 58, Disk: 50 },
                { name: '30-40', CPU: 75, Network: 20, Disk: 46 },
                { name: '40-50', CPU: 25, Network: 58, Disk: 65 },
                { name: '50-60', CPU: 20, Network: 120, Disk: 40 },
                { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { name: '80-90', CPU: 45, Network: 80, Disk: 50 },
                { name: '90+', CPU: 10, Network: 20, Disk: 15 },
            ];
            break;
        default:
            data = [
                { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { name: '20-30', CPU: 120, Network: 58, Disk: 50 },
                { name: '30-40', CPU: 75, Network: 20, Disk: 46 },
                { name: '40-50', CPU: 25, Network: 58, Disk: 65 },
                { name: '50-60', CPU: 20, Network: 120, Disk: 40 },
                { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { name: '80-90', CPU: 45, Network: 80, Disk: 50 },
                { name: '90+', CPU: 10, Network: 20, Disk: 15 },
            ];
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
});


//Mock API for the Linear chart Visualization components.
app.post('/data/3', function (req, res) {
    var data = [];

    //Lets add some delay to have some viz.
    addDelay();

    switch (req.query.time_filter) {
        case "Last 30 Days":
            data = [{
                viz1: [
                    {
                        "date": "2018-07-05 06:00:00.0",
                        "Real Cost": 0.105,
                        "Optimal Cost": 0.0192
                    },
                    {
                        "date": "2018-07-05 07:00:00.0",
                        "Real Cost": 0.120,
                        "Optimal Cost": 0.0792
                    },
                    {
                        "date": "2018-07-05 08:00:00.0",
                        "Real Cost": 0.230,
                        "Optimal Cost": 0.0992
                    },
                ],
                viz2: [
                    { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                    { name: '20-30', CPU: 60, Network: 58, Disk: 23 },
                    { name: '30-40', CPU: 75, Network: 65, Disk: 46 },
                    { name: '40-50', CPU: 25, Network: 30, Disk: 65 },
                    { name: '50-60', CPU: 65, Network: 120, Disk: 40 },
                    { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                    { name: '80-90', CPU: 45, Network: 80, Disk: 12 },
                    { name: '90+', CPU: 90, Network: 09, Disk: 78 },
                ],
                viz3: [
                    { name: 'Mon', CPU: 15, Memory: 80 },
                    { name: 'Tue', CPU: 100, Memory: 89 },
                    { name: 'Wed', CPU: 10, Memory: 30 },
                    { name: 'Thu', CPU: 50, Memory: 36 },
                    { name: 'Fri', CPU: 85, Memory: 65 },
                    { name: 'Sat', CPU: 34, Memory: 40 },
                    { name: 'Sun', CPU: 35, Memory: 12 },
                ],
                viz4: [
                    { name: 't2.small', value: 40 },
                    { name: 't3.medium', value: 30 },
                    { name: 't1.large', value: 30 },
                    { name: 'm2.nano', value: 20 },
                    { name: 't2.large', value: 27 },
                    { name: 't3.medium', value: 25 }],
                viz5: [
                    { name: 'Running', value: 60 },
                    { name: 'Stopped', value: 40 },
                    { name: 'Idle', value: 40 },],
                viz6: [
                    { name: 'On-Demand', value: 10 },
                    { name: 'Spot', value: 20 },
                    { name: 'Reserved', value: 70 },],
            },];
            break;
        case "Last Week":
            data = [{
                viz1: [
                    { name: 'Aug 1', "Optimal Cost": 45, "Real Cost": 27, },
                    { name: 'Aug 2', "Optimal Cost": 35, "Real Cost": 17, },
                    { name: 'Aug 3', "Optimal Cost": 25, "Real Cost": 97, },
                    { name: 'Aug 4', "Optimal Cost": 25, "Real Cost": 37, },
                    { name: 'Aug 5', "Optimal Cost": 15, "Real Cost": 47, },
                ],
                viz2: [
                    { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                    { name: '20-30', CPU: 120, Network: 58, Disk: 50 },
                    { name: '30-40', CPU: 75, Network: 20, Disk: 46 },
                    { name: '40-50', CPU: 25, Network: 58, Disk: 65 },
                    { name: '50-60', CPU: 20, Network: 120, Disk: 40 },
                    { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                    { name: '80-90', CPU: 45, Network: 80, Disk: 50 },
                    { name: '90+', CPU: 10, Network: 20, Disk: 15 },
                ],
                viz3: [
                    { name: 'Mon', CPU: 15, Memory: 15 },
                    { name: 'Tue', CPU: 50, Memory: 20 },
                    { name: 'Wed', CPU: 10, Memory: 30 },
                    { name: 'Thu', CPU: 15, Memory: 36 },
                    { name: 'Fri', CPU: 85, Memory: 65 },
                    { name: 'Sat', CPU: 20, Memory: 40 },
                    { name: 'Sun', CPU: 35, Memory: 100 },
                ], viz4: [
                    { name: 't2.small', value: 40 },
                    { name: 't3.medium', value: 30 },
                    { name: 't1.large', value: 30 },
                    { name: 'm2.nano', value: 20 },
                    { name: 't2.large', value: 27 },
                    { name: 't3.medium', value: 25 }],
                viz5: [
                    { name: 'Running', value: 10 },
                    { name: 'Stopped', value: 40 },
                    { name: 'Idle', value: 50 },],
                viz6: [
                    { name: 'On-Demand', value: 70 },
                    { name: 'Spot', value: 20 },
                    { name: 'Reserved', value: 10 },],
            }];
            break;
        case "This Week":
            data = [{
                viz1: [
                    { name: 'July 23', "Optimal Cost": 455, "Real Cost": 247, },
                    { name: 'July 24', "Optimal Cost": 355, "Real Cost": 147, },
                    { name: 'July 25', "Optimal Cost": 855, "Real Cost": 947, },
                    { name: 'July 26', "Optimal Cost": 255, "Real Cost": 347, },
                    { name: 'July 27', "Optimal Cost": 455, "Real Cost": 647, },
                    { name: 'July 28', "Optimal Cost": 155, "Real Cost": 447, "Predictable Cost": 447, },
                    { name: 'July 29', "Predictable Cost": 547, },
                    { name: 'July 30', "Predictable Cost": 400, },
                ],
                viz2: [
                    { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { name: '10-20', CPU: 50, Network: 80, Disk: 10 },
                    { name: '20-30', CPU: 120, Network: 80, Disk: 50 },
                    { name: '30-40', CPU: 75, Network: 20, Disk: 46 },
                    { name: '40-50', CPU: 60, Network: 50, Disk: 10 },
                    { name: '50-60', CPU: 80, Network: 120, Disk: 40 },
                    { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                    { name: '80-90', CPU: 45, Network: 80, Disk: 50 },
                    { name: '90+', CPU: 60, Network: 20, Disk: 15 },
                ],
                viz3: [
                    { name: 'Mon', CPU: 15, Memory: 15 },
                    { name: 'Tue', CPU: 50, Memory: 50 },
                    { name: 'Wed', CPU: 10, Memory: 30 },
                    { name: 'Thu', CPU: 30, Memory: 70 },
                    { name: 'Fri', CPU: 85, Memory: 65 },
                    { name: 'Sat', CPU: 20, Memory: 90 },
                    { name: 'Sun', CPU: 50, Memory: 100 },
                ],
                viz4: [
                    { name: 't2.small', value: 40 },
                    { name: 't3.medium', value: 30 },
                    { name: 't1.large', value: 30 },
                    { name: 'm2.nano', value: 20 },
                    { name: 't2.large', value: 27 },
                    { name: 't3.medium', value: 25 }],
                viz5: [
                    { name: 'Running', value: 10 },
                    { name: 'Stopped', value: 80 },
                    { name: 'Idle', value: 10 },],
                viz6: [
                    { name: 'On-Demand', value: 50 },
                    { name: 'Spot', value: 30 },
                    { name: 'Reserved', value: 20 },],
            }];
            break;
        default:
            data = [{
                viz1: [
                    { name: 'June 1', "Optimal Cost": 40, "Real Cost": 20, },
                    { name: 'June 2', "Optimal Cost": 30, "Real Cost": 18, },
                    { name: 'June 3', "Optimal Cost": 20, "Real Cost": 90, },
                    { name: 'June 4', "Optimal Cost": 27, "Real Cost": 38, },
                    { name: 'June 5', "Optimal Cost": 18, "Real Cost": 40, },
                ],
                viz2: [
                    { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                    { name: '20-30', CPU: 120, Network: 58, Disk: 80 },
                    { name: '30-40', CPU: 55, Network: 30, Disk: 46 },
                    { name: '40-50', CPU: 25, Network: 88, Disk: 65 },
                    { name: '50-60', CPU: 50, Network: 120, Disk: 40 },
                    { name: '70-80', CPU: 35, Network: 53, Disk: 10 },
                    { name: '80-90', CPU: 35, Network: 80, Disk: 50 },
                    { name: '90+', CPU: 10, Network: 80, Disk: 15 },
                ],
                viz3: [
                    { name: 'Mon', CPU: 95, Memory: 15 },
                    { name: 'Tue', CPU: 70, Memory: 20 },
                    { name: 'Wed', CPU: 40, Memory: 30 },
                    { name: 'Thu', CPU: 55, Memory: 46 },
                    { name: 'Fri', CPU: 85, Memory: 15 },
                    { name: 'Sat', CPU: 20, Memory: 40 },
                    { name: 'Sun', CPU: 25, Memory: 100 },
                ],
                viz4: [
                    { name: 't2.small', value: 40 },
                    { name: 't3.medium', value: 30 },
                    { name: 't1.large', value: 30 },
                    { name: 'm2.nano', value: 20 },
                    { name: 't2.large', value: 27 },
                    { name: 't3.medium', value: 25 }],
                viz5: [
                    { name: 'Running', value: 40 },
                    { name: 'Stopped', value: 10 },
                    { name: 'Idle', value: 60 },],
                viz6: [
                    { name: 'On-Demand', value: 30 },
                    { name: 'Spot', value: 60 },
                    { name: 'Reserved', value: 10 },],
            }];
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
});

app.post('/api/perspective', function (req, res) {

    //Add some delay on purpose.
    addDelay();

    var data = [
        {
            "key": "Cost - By Groups",
            "data": [
                {
                    "name": "DevTest",
                    "value": 11.59
                },
                {
                    "name": "Nginx",
                    "value": 18.88
                },
                {
                    "name": "t2.nano",
                    "value": 29.0
                },
                {
                    "name": "t3.large",
                    "value": 5.99
                },
                {
                    "name": "m5.xlarge",
                    "value": 41.48
                },
                {
                    "name": "in-use",
                    "value": 0.0
                },
                {
                    "name": "running",
                    "value": 180.95
                },
                {
                    "name": "t2.small",
                    "value": 11.59
                },
                {
                    "name": "us-west-2a",
                    "value": 10.78
                },
                {
                    "name": "t2.large",
                    "value": 66.82
                },
                {
                    "name": "t3.nano",
                    "value": 0.25
                },
                {
                    "name": "NANO3",
                    "value": 10.78
                },
                {
                    "name": "NANOCLUSTER",
                    "value": 7.56
                },
                {
                    "name": "us-east-2a",
                    "value": 77.09
                },
                {
                    "name": "DOCKER1",
                    "value": 10.02
                },
                {
                    "name": "us-east-2b",
                    "value": 62.06
                },
                {
                    "name": "us-east-2c",
                    "value": 20.92
                },
                {
                    "name": "us-west-1",
                    "value": 2.82
                },
                {
                    "name": "us-west-2",
                    "value": 10.78
                },
                {
                    "name": "stopped",
                    "value": 0.56
                },
                {
                    "name": "t2.micro",
                    "value": 0.0
                },
                {
                    "name": "demo v0.1",
                    "value": 66.82
                },
                {
                    "name": "VOLUME",
                    "value": 0.0
                },
                {
                    "name": "active",
                    "value": 0.0
                },
                {
                    "name": "NANOCLUSTER2",
                    "value": 7.84
                },
                {
                    "name": "us-west-1a",
                    "value": 2.82
                },
                {
                    "name": "us-east-1c",
                    "value": 7.84
                },
                {
                    "name": "us-east-1",
                    "value": 7.84
                },
                {
                    "name": "us-east-2",
                    "value": 160.07
                },
                {
                    "name": "t2.medium",
                    "value": 23.38
                },
                {
                    "name": "t3.medium",
                    "value": 3.0
                }
            ],
            "filterBy": [
                {
                    "name": "DevTest",
                    "value": 468
                },
                {
                    "name": "Nginx",
                    "value": 469
                },
                {
                    "name": "t2.nano",
                    "value": 470
                },
                {
                    "name": "t3.large",
                    "value": 471
                },
                {
                    "name": "m5.xlarge",
                    "value": 472
                },
                {
                    "name": "in-use",
                    "value": 473
                },
                {
                    "name": "running",
                    "value": 474
                },
                {
                    "name": "t2.small",
                    "value": 475
                },
                {
                    "name": "us-west-2a",
                    "value": 476
                },
                {
                    "name": "t2.large",
                    "value": 477
                },
                {
                    "name": "t3.nano",
                    "value": 478
                },
                {
                    "name": "NANO3",
                    "value": 479
                },
                {
                    "name": "NANOCLUSTER",
                    "value": 480
                },
                {
                    "name": "us-east-2a",
                    "value": 481
                },
                {
                    "name": "DOCKER1",
                    "value": 482
                },
                {
                    "name": "us-east-2b",
                    "value": 483
                },
                {
                    "name": "us-east-2c",
                    "value": 484
                },
                {
                    "name": "us-west-1",
                    "value": 485
                },
                {
                    "name": "us-west-2",
                    "value": 486
                },
                {
                    "name": "stopped",
                    "value": 487
                },
                {
                    "name": "t2.micro",
                    "value": 488
                },
                {
                    "name": "demo v0.1",
                    "value": 489
                },
                {
                    "name": "VOLUME",
                    "value": 490
                },
                {
                    "name": "active",
                    "value": 491
                },
                {
                    "name": "NANOCLUSTER2",
                    "value": 492
                },
                {
                    "name": "us-west-1a",
                    "value": 493
                },
                {
                    "name": "us-east-1c",
                    "value": 494
                },
                {
                    "name": "us-east-1",
                    "value": 495
                },
                {
                    "name": "us-east-2",
                    "value": 496
                },
                {
                    "name": "t2.medium",
                    "value": 497
                },
                {
                    "name": "t3.medium",
                    "value": 498
                }
            ],
            "showBy": [
                {
                    "name": "Top 10 Spenders",
                    "value": 20
                },
                {
                    "name": "Top 10 Wastage",
                    "value": 10
                }
            ]
        },
        {
            "key": "Cost - By Business Services",
            "data": [{ name: 'Misc Cost', value: 70, unit: '$' }, { name: 'Optimal Cost', value: 30, unit: '$' }, { name: 'Real Cost', value: 20, unit: '$' },],
            "filterBy": [],
            "showBy": [
                {
                    "name": "Top 10 Spenders",
                    "value": 20
                },
                {
                    "name": "Top 10 Wastage",
                    "value": 10
                }
            ]
        },
        {
            "key": "Cost - By Instance Types",
            "data": [
                {
                    "name": "t2.nano",
                    "value": 29.0
                },
                {
                    "name": "t3.large",
                    "value": 5.99
                },
                {
                    "name": "m5.xlarge",
                    "value": 41.48
                },
                {
                    "name": "t2.small",
                    "value": 11.59
                },
                {
                    "name": "t2.large",
                    "value": 66.82
                },
                {
                    "name": "t3.nano",
                    "value": 0.25
                },
                {
                    "name": "t2.micro",
                    "value": 0.0
                },
                {
                    "name": "VOLUME",
                    "value": 0.0
                },
                {
                    "name": "t2.medium",
                    "value": 23.38
                },
                {
                    "name": "t3.medium",
                    "value": 3.0
                }
            ],
            "filterBy": [
                {
                    "name": "t2.nano",
                    "value": 470
                },
                {
                    "name": "t3.large",
                    "value": 471
                },
                {
                    "name": "m5.xlarge",
                    "value": 472
                },
                {
                    "name": "t2.small",
                    "value": 475
                },
                {
                    "name": "t2.large",
                    "value": 477
                },
                {
                    "name": "t3.nano",
                    "value": 478
                },
                {
                    "name": "t2.micro",
                    "value": 488
                },
                {
                    "name": "VOLUME",
                    "value": 490
                },
                {
                    "name": "t2.medium",
                    "value": 497
                },
                {
                    "name": "t3.medium",
                    "value": 498
                }
            ],
            "showBy": [
                {
                    "name": "Top 10 Spenders",
                    "value": 20
                },
                {
                    "name": "Top 10 Wastage",
                    "value": 10
                }
            ]
        }
    ];


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });

});

//indivisual end points
app.post('/api/summary', function (req, res) {

    //Add some delay on purpose.
    addDelay();

    var data = [
        {
            name: 'Aggregated Cost',
            unit: '$',
            value: '50000',
            trend: 5
        },
        {
            name: 'Optimal Cost',
            unit: '$',
            value: '40000',
            trend: -5
        }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });

});

app.post('/api/metrics', function (req, res) {

    //Add some delay on purpose.
    addDelay();

    var data = [
        {
            "date": "2018-07-05 06:00:00.0",
            "Real Cost": 0.105,
            "Optimal Cost": 0.0192,
            "Misc Cost": 0.192,
        },
        {
            "date": "2018-07-06 07:00:00.0",
            "Real Cost": 0.120,
            "Optimal Cost": 0.0792,
            "Misc Cost": 0.162,
        },
        {
            "date": "2018-07-07 08:00:00.0",
            "Real Cost": 0.230,
            "Optimal Cost": 0.0992,
            "Misc Cost": 0.152,
        },
        {
            "date": "2018-07-08 08:00:00.0",
            "Real Cost": 0.330,
            "Optimal Cost": 0.1192,
            "Misc Cost": 0.222,
        },
        {
            "date": "2018-07-09 08:00:00.0",
            "Real Cost": 0.330,
            "Optimal Cost": 0.1492,
            "Misc Cost": 0.222,
        },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/metricdistributionbyutil', function (req, res) {
    //Add some delay on purpose.

    addDelay();

    var data = [];
    //Default will be fetched alwasy as My mock API has some parsing issue.
    switch (req.query.tempFilter) {
        case "Last 30 Days":
            data = [
                { name: '0-10', TPU: 85, Hub: 54, HDD: 100 },
                { name: '10-20', TPU: 20, Hub: 20, HDD: 20 },
                { name: '20-30', TPU: 70, Hub: 88, HDD: 23 },
                { name: '30-40', TPU: 75, Hub: 55, HDD: 46 },
                { name: '40-50', TPU: 55, Hub: 30, HDD: 65 },
                { name: '50-60', TPU: 65, Hub: 120, HDD: 40 },
                { name: '70-80', TPU: 65, Hub: 53, HDD: 30 },
                { name: '80-90', TPU: 45, Hub: 90, HDD: 12 },
                { name: '90+', TPU: 10, Hub: 09, HDD: 78 },
            ];;
            break;
        case "2":
            data = [
                { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { name: '20-30', CPU: 60, Network: 58, Disk: 23 },
                { name: '30-40', CPU: 75, Network: 65, Disk: 46 },
                { name: '40-50', CPU: 25, Network: 30, Disk: 65 },
                { name: '50-60', CPU: 65, Network: 120, Disk: 40 },
                { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { name: '80-90', CPU: 45, Network: 80, Disk: 12 },
                { name: '90+', CPU: 90, Network: 09, Disk: 78 },
            ];
            break;
        case "3":
            data = [
                { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { name: '20-30', CPU: 60, Network: 58, Disk: 23 },
                { name: '30-40', CPU: 75, Network: 65, Disk: 46 },
                { name: '40-50', CPU: 25, Network: 30, Disk: 65 },
                { name: '50-60', CPU: 65, Network: 120, Disk: 40 },
                { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { name: '80-90', CPU: 45, Network: 80, Disk: 12 },
                { name: '90+', CPU: 90, Network: 09, Disk: 78 },
            ];
            break;
        default:
            data = [
                { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { name: '20-30', CPU: 60, Network: 58, Disk: 23 },
                { name: '30-40', CPU: 75, Network: 65, Disk: 46 },
                { name: '40-50', CPU: 25, Network: 30, Disk: 65 },
                { name: '50-60', CPU: 65, Network: 120, Disk: 40 },
                { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { name: '80-90', CPU: 45, Network: 80, Disk: 12 },
                { name: '90+', CPU: 90, Network: 09, Disk: 78 },
            ];
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});


app.post('/api/metricdistributionbyday', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    var data = [
        { name: 'Mon', Util: 50, Cloud: 20, CPU: 15, Memory: 80 },
        { name: 'Tue', Util: 50, Cloud: 20, CPU: 100, Memory: 89 },
        { name: 'Wed', Util: 50, Cloud: 20, CPU: 10, Memory: 30 },
        { name: 'Thu', Util: 50, Cloud: 20, CPU: 50, Memory: 36 },
        { name: 'Fri', Util: 50, Cloud: 20, CPU: 85, Memory: 65 },
        { name: 'Sat', Util: 50, Cloud: 20, CPU: 34, Memory: 40 },
        { name: 'Sun', Util: 50, Cloud: 20, CPU: 35, Memory: 12 },
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/distribution', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    switch (req.body.metrics) {
        case "INSTANCE_TYPE":
            data = [
                { name: 't2.small', value: 40 },
                { name: 't3.medium', value: 30 },
                { name: 't1.large', value: 30 },
                { name: 'm2.nano', value: 20 },
                { name: 't2.large', value: 27 },
                { name: 't3.medium', value: 25 }];
            break;
        case "INSTANCE_STATE":
            data = [
                { name: 'Running', value: 10 },
                { name: 'Stopped', value: 40 },
                { name: 'Idle', value: 50 },];
            break;
        case "DEPLOYMENT_TYPE":
            data = [
                { name: 'On-Demand', value: 50 },
                { name: 'Spot', value: 30 },
                { name: 'Reserved', value: 20 },]
            break;
        default:
            data = [
                { name: 't2.small', value: 40 },
                { name: 't3.medium', value: 30 },
                { name: 't1.large', value: 30 },
                { name: 'm2.nano', value: 20 },
                { name: 't2.large', value: 27 },
                { name: 't3.medium', value: 25 }];
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/aggregatedmetrics', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    data = [
        { id: 1, name: 't2.small', age: 24, location: 'Lagos', level: 'stage-1', mood: 'happy', status: 10, action: 'More Detail' },
        { id: 2, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', mood: 'anxious', status: 30, action: 'More Detail' },
        { id: 3, name: 'linux', age: 20, location: 'Abuja', level: 'stage-2', mood: 'indifferent', status: 70, action: 'More Detail' },
        { id: 4, name: 'windows', age: 22, location: 'Jos', level: 'stage-3', mood: 'sad', status: 90, action: 'More Detail' },
        { id: 5, name: 'us-west-1', age: 30, location: 'Lagos', level: 'stage-4', mood: 'angry', status: 100, action: 'More Detail' },
        { id: 6, name: 'Damian Swaggbag', age: 35, location: 'PortHarcourt', level: 'stage-1', mood: 'bitter', status: 20, action: 'More Detail' },
        { id: 7, name: 'us-east-2', age: 20, location: 'Imo', level: 'stage-3', mood: 'happy', status: 40, action: 'More Detail' },
        { id: 8, name: 'vpc-1', age: 19, location: 'Bayelsa', level: 'stage-2', mood: 'party-mood', status: 50, action: 'More Detail' },
        { id: 9, name: 'ap-south-1', age: 18, location: 'Enugu', level: 'stage-4', mood: 'happy', status: 70, action: 'More Detail' },
        { id: 10, name: 't2.micro', age: 21, location: 'Zamfara', level: 'stage-4', mood: 'anxious', status: 30, action: 'More Detail' },
        { id: 11, name: 'us-west-5', age: 20, location: 'India', level: 'stage-3', mood: 'happy', status: 80, action: 'More Detail' },
        { id: 12, name: 'us-south-6', age: 20, location: 'UK', level: 'stage-4', mood: 'sad', status: 50, action: 'More Detail' },
        { id: 13, name: 'us-east-7', age: 23, location: 'US', level: 'stage-6', mood: 'coding', status: 60, action: 'More Detail' },
        { id: 14, name: 'us-south-8', age: 24, location: 'AUG', level: 'stage-7', mood: 'happy', status: 70, action: 'More Detail' },
        { id: 15, name: 'us-east-9', age: 27, location: 'AUS', level: 'stage-8', mood: 'party', status: 20, action: 'More Detail' },
        { id: 16, name: 'us-south-66', age: 23, location: 'Atlanta', level: 'stage-23', mood: 'dead', status: 30, action: 'More Detail' },
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});


app.post('/api/fetchgroups', function (req, res) {
    // APIKEY:fetchGroupsAPI
    //Add some delay on purpose.
    addDelay();
    data = [
        {
            "name": "grp-64546",
            "type": "small",
            "status": "OPEN",
            "rescount": "323",
            "action": '',
        },
        {
            "name": "grp-23",
            "type": "small",
            "status": "RESUME",
            "rescount": "323",
            "action": '',
        },
        {
            "name": "grp-43",
            "type": "large",
            "status": "OPEN",
            "rescount": "32",
            "action": '',
        },
        {
            "name": "grp-54",
            "type": "large",
            "status": "RESUME",
            "rescount": "432",
            "action": '',
        }, {
            "name": "grp-56",
            "type": "large",
            "status": "CLOSED",
            "rescount": "434",
            "action": '',
        },
        {
            "name": "grp-76",
            "type": "medium",
            "status": "CLOSED",
            "rescount": "32",
            "action": '',
        }

    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "We are facing some technical issues, please try later" });
});

app.post('/api/testMetric', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    data = [
        {
            "resourceId": "res-64546",
            "suggested": "m1.small",
            "current": "t1.large",
            "usageDate": "2019-01-01",
            "costDailyAverage": 3589467.197,
            "costCurrent": 85743.31,
            "costMtm": 756.91,
            "instanceId": 'i-783459',
            "action": '',
            "alertType": "success",
        },
        {
            "resourceId": "res-9787",
            "alertType": "danger",
            "current": "t5.medium",
            "suggested": "m3.medium",
            "instanceId": 'i-807331824280',
            "usageDate": "2018-12-30",
            "costDailyAverage": 371.197,
            "costCurrent": 2822.31,
            "costMtm": 3935.91,
            "action": '',
        },
        {
            "resourceId": "res-231432",
            "alertType": "warning",
            "current": "r66.medium",
            "suggested": "re3.medium",
            "instanceId": 'y-fsdgff31824280',
            "usageDate": "2014-09-30",
            "costDailyAverage": 4321.197,
            "costCurrent": 43243.43,
            "costMtm": 424.43,
            "action": '',
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "We are facing some technical issues, please try later" });
});

app.post('/api/computedetails', function (req, res) {
    //Add some delay on purpose.
    addDelay();

    const data = [
        {
            name: 'vCPUS',
            value: 250,
            unit: 'vCPUs'
        },
        {
            name: 'Memory',
            value: 1,
            unit: 'TB Memory consumed'
        },
        {
            name: 'Storage',
            value: 256,
            unit: 'GB SQL instances'
        },
        {
            name: 'EBS',
            value: 1,
            unit: 'TB EBS volumes'
        },
        {
            name: 'S3 Bucket',
            value: 50,
            unit: 'S3 Buckets'
        },
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/containers/recommendation', function (req, res) {
    //Add some delay on purpose.
    addDelay();

    const data = [
        {
            name: 'instResize',
            value: '10%',
            unit: 'Instances can be resized',
        },
        {
            name: 'instShutDown',
            value: '25%',
            unit: 'Instances can be shutdown',
        },
        {
            name: 'instReserve',
            value: '8%',
            unit: 'Instances can be converted to reserved instances',
        }
        , {
            name: 'snapshot',
            value: '50%',
            unit: 'snapshots can be deleted',
        }, {
            name: 'showAll',
            value: '',
            unit: 'Show all Recommendations',
        },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/instance/schedule', function (req, res) {
    //Add some delay on purpose.

    addDelay();

    const data = req.query.resourceid ? [
        {
            "day": "MON",
            "schedule": [
                {
                    "hour": "00:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "01:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "02:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "03:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "04:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "05:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "06:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "07:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "08:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "09:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "10:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "11:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "12:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "13:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "14:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "15:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "16:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "17:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "18:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "19:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "20:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "21:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "22:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "23:00",
                    "status": Math.random() > 0.40
                }
            ]
        },
        {
            "day": "TUE",
            "schedule": [
                {
                    "hour": "00:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "01:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "02:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "03:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "04:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "05:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "06:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "07:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "08:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "09:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "10:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "11:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "12:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "13:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "14:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "15:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "16:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "17:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "18:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "19:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "20:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "21:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "22:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "23:00",
                    "status": Math.random() > 0.40
                }
            ]
        },
        {
            "day": "WED",
            "schedule": [
                {
                    "hour": "00:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "01:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "02:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "03:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "04:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "05:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "06:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "07:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "08:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "09:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "10:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "11:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "12:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "13:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "14:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "15:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "16:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "17:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "18:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "19:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "20:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "21:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "22:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "23:00",
                    "status": Math.random() > 0.40
                }
            ]
        },
        {
            "day": "THU",
            "schedule": [
                {
                    "hour": "00:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "01:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "02:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "03:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "04:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "05:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "06:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "07:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "08:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "09:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "10:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "11:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "12:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "13:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "14:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "15:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "16:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "17:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "18:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "19:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "20:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "21:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "22:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "23:00",
                    "status": Math.random() > 0.40
                }
            ]
        },
        {
            "day": "FRI",
            "schedule": [
                {
                    "hour": "00:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "01:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "02:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "03:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "04:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "05:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "06:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "07:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "08:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "09:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "10:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "11:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "12:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "13:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "14:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "15:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "16:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "17:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "18:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "19:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "20:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "21:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "22:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "23:00",
                    "status": Math.random() > 0.40
                }
            ]
        },
        {
            "day": "SAT",
            "schedule": [
                {
                    "hour": "00:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "01:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "02:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "03:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "04:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "05:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "06:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "07:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "08:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "09:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "10:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "11:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "12:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "13:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "14:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "15:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "16:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "17:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "18:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "19:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "20:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "21:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "22:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "23:00",
                    "status": Math.random() > 0.40
                }
            ]
        },
        {
            "day": "SUN",
            "schedule": [
                {
                    "hour": "00:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "01:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "02:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "03:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "04:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "05:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "06:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "07:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "08:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "09:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "10:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "11:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "12:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "13:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "14:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "15:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "16:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "17:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "18:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "19:00",
                    "status": Math.random() > 0.50
                },
                {
                    "hour": "20:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "21:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "22:00",
                    "status": Math.random() > 0.40
                },
                {
                    "hour": "23:00",
                    "status": Math.random() > 0.40
                }
            ]
        }
    ] : [];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});


app.post('/api/instance/saveschedule', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send({ success: "Schedule saved succesfully" });
});

app.post('/api/list/instancesbygroup', function (req, res) {
    //Add some delay on purpose.
    addDelay();

    const data = [
        {
            "groupId": 148,
            "displayName": "t2.micro",
            "resourceId": [
                "i-0e40f9481bf0b7988",
                "i-01238250c8efd5712"
            ]
        },
        {
            "groupId": 149,
            "displayName": "ap-south-1",
            "resourceId": [
                "j-0e40f9481bf0b7988",
                "j-01238250c8efd5712"
            ]
        },
        {
            "groupId": 150,
            "displayName": "ap-south-1a",
            "resourceId": [
                "k-0e40f9481bf0b7988",
                "k-01238250c8efd5712"
            ]
        }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/auth/login', function (req, res) {
    let data = [{
        key: 'LOGIN_ERROR',
        variant: 'error',
        message: 'You have entered wrong credentials ( dynamic error from API)  .',
    }];

    let responseStatus = 400;
    if (req.body.email === 'zxc' && req.body.password === 'zxc') {
        data =
            {
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                'userId': '125',
                'firstName': 'John',
                'lastName': 'Doe',
                'accountNumber': '89861328498',
                'email': 'a2i@gmail.com',
                'accountType': 'PRO',
                "roles": "ROOT_ADMIN",
            };
        responseStatus = 200;
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(responseStatus).send(data);
});

app.post('/api/auth/logout', function (req, res) {
    var data = {};

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/registration/completeregistration', function (req, res) {
    var data = { "status": "success" };

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/registration/checkemailexists', function (req, res) {
    var data = "true";
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/auth/resetpassword', function (req, res) {
    var data = "true";
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/containers/byreservationandutilization', function (req, res) {


    var data = []
    if (req.body.metrics[0] === 'MEMORY_UTILIZATION') {
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        data = [
            { name: '0-10', CPU: 75, Network: 54, Disk: 100 },
            { name: '10-20', CPU: 50, Network: 20, Disk: 20 },
            { name: '20-30', CPU: 120, Network: 58, Disk: 50 },
            { name: '30-40', CPU: 75, Network: 20, Disk: 46 },
            { name: '40-50', CPU: 25, Network: 58, Disk: 65 },
            { name: '50-60', CPU: 20, Network: 120, Disk: 40 },
            { name: '70-80', CPU: 35, Network: 53, Disk: 30 },
            { name: '80-90', CPU: 45, Network: 80, Disk: 50 },
            { name: '90+', CPU: 10, Network: 20, Disk: 15 },
        ];
    }
    if (req.body.metrics[0] === 'CPU_UTILIZATION') {
        data = [
            { name: '0-10', GPU: 75, Network: 54, },
            { name: '10-20', GPU: 50, Network: 20, },
            { name: '20-30', GPU: 120, Network: 58 },
            { name: '30-40', GPU: 75, Network: 20, },
            { name: '40-50', GPU: 25, Network: 58, },
            { name: '50-60', GPU: 20, Network: 120, },
            { name: '70-80', GPU: 35, Network: 53, },
            { name: '80-90', GPU: 45, Network: 80, },
            { name: '90+', GPU: 10, Network: 20, },
        ];
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/containers/aggregatedcost', function (req, res) {
    addDelay();

    var data =
        [{
            name: 'Aggregated Cost',
            unit: '$',
            value: '50000',
            trend: 5
        },
        {
            name: 'Optimal Cost',
            unit: '$',
            value: '40000',
            trend: -5
        },
        {
            name: 'Potential Savings',
            unit: '$',
            value: '90000',
            trend: -5
        },
        ]
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/containers/task/distrubution', function (req, res) {
    addDelay();

    var data = [
        { name: 'running', value: 2 },
        { name: 'active', value: 5 },
        { name: 'stopped', value: 4 }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/flem/service/status', function (req, res) {
    addDelay();

    var data = [
        { name: 'running', value: 4 },
        { name: 'active', value: 1 },
        { name: 'stopped', value: 1 }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/containers/task/distribution', function (req, res) {
    addDelay();

    var data = [
        { name: 'ECS', value: 6 },
        { name: 'Azure', value: 8 },
        { name: 'GCP', value: 6 },
        { name: 'Kafka', value: 2 },
        { name: 'Pub-Sub', value: 8 },
        { name: 'SQL mockit', value: 4 },
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/containers/service/distribution', function (req, res) {
    addDelay();

    var data = [
        { name: 'Kafka', value: 4 },
        { name: 'Azure', value: 1 },
        { name: 'SQL mockit', value: 9 },
        { name: 'ECS', value: 2 },
        { name: 'GCP', value: 2 },
        { name: 'Pub-Sub', value: 4 },

    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error for multi-cloud" });
    res.status(200).send(data);
});

app.post('/api/containers/costbytype', function (req, res) {
    addDelay();

    var data = [
        { name: 'ECS', value: 40, unit: '#' },
        { name: 'EKS', value: 30, unit: '$' },
        { name: 'FARGATE', value: 30, unit: '$' }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/containers/clusteraggregates', function (req, res) {
    addDelay();

    var data = [
        {
            clustername: "abc",
            configmetric: "abc",
            performancemetric: "abc",
            billingcost: 1234
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/containers/serviceaggregates', function (req, res) {
    addDelay();

    var data = [
        {
            service: "abc",
            configmetric: "abc",
            performancemetric: "abc",
            billingcost: "12341"
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/containers/taskaggregates', function (req, res) {
    addDelay();

    var data = [
        {
            task: "abc",
            config: "abc"
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/flemingo/summary', function (req, res) {
    addDelay();

    var data =
        [{
            name: 'System Spending',
            unit: '₹',
            value: '4000',
            trend: 1
        },
        {
            name: 'Billing Savings',
            unit: '¥',
            value: '42543',
            trend: -1
        },
        {
            name: 'Additonal Cost',
            unit: '$',
            value: '3000',
            trend: 1
        },
        ]

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error for summary graph, Regional data can't be displayed" });
    res.status(200).send(data);
});

app.post('/api/flemingo/costs', function (req, res) {
    addDelay();

    var data =
        [
            {
                name: 'Potential Savings',
                unit: '$',
                value: '90000',
                trend: -1
            },
            {
                name: 'Agg Savings',
                unit: '$',
                value: '30000',
                trend: 5
            },
            {
                name: 'Addtional Savings',
                unit: '$',
                value: '5000',
                trend: -1
            },
            {
                helper: 'This would be some text to explain',
            },
        ]

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error to test summary component" });
    res.status(200).send(data);
});


app.post('/api/flemingo/accomodations', function (req, res) {
    addDelay();

    var data = [
        {
            "name": "service1",
            "reservation": 100,
            "utilization": 80
        },
        {
            "name": "service2",
            "reservation": 300,
            "utilization": 70
        },
        {
            "name": "service3",
            "reservation": 500,
            "utilization": 30
        },
        {
            "name": "service4",
            "reservation": 240,
            "utilization": 50
        },
        {
            "name": "service5",
            "reservation": 400,
            "utilization": 70
        },
        {
            "name": "service5",
            "reservation": 200,
            "utilization": 40
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});




app.post('/api/flemingo/awsSpending', function (req, res) {
    addDelay();

    var data = [
        {
            "name": "basic1",
            "reservation": 10,
            "utilization": 40,
            "spot": 70,

        },
        {
            "name": "basic2",
            "reservation": 300,
            "utilization": 70,
            "spot": 120,
        },
        {
            "name": "basic3",
            "reservation": 300,
            "utilization": 70,
            "spot": 80,
        },
        {
            "name": "basic4",
            "reservation": 240,
            "utilization": 50,
            "spot": 120,
        },
        {
            "name": "basic5",
            "reservation": 100,
            "utilization": 70,
            "spot": 10,
        },
        {
            "name": "basic6",
            "reservation": 200,
            "utilization": 40,
            "spot": 120,
        }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/instances/aggregatehistogrammetrics', function (req, res) {
    addDelay();

    var data = [
        {
            "name": "service1",
            "reservation": 100,
            "utilization": 80,
            "spot": 120,
            'unit': '$',
        },
        {
            "name": "service2",
            "reservation": 300,
            "utilization": 70,
            "spot": 120,
        },
        {
            "name": "service3",
            "reservation": 500,
            "utilization": 30,
            "spot": 120,
        },
        {
            "name": "service4",
            "reservation": 240,
            "utilization": 50,
            "spot": 120,
        },
        {
            "name": "service5",
            "reservation": 400,
            "utilization": 70,
            "spot": 120,
        },
        {
            "name": "service5",
            "reservation": 200,
            "utilization": 40,
            "spot": 120,
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/instances/getaggregatemetriccountbyday', function (req, res) {
    addDelay();

    var data = [
        {
            "name": "service1",
            "reservation": 100,
            "utilization": 80,
            'unit': '$',
        },
        {
            "name": "service2",
            "reservation": 300,
            "utilization": 70
        },
        {
            "name": "service3",
            "reservation": 500,
            "utilization": 30
        },
        {
            "name": "service4",
            "reservation": 240,
            "utilization": 50
        },
        {
            "name": "service5",
            "reservation": 400,
            "utilization": 70
        },
        {
            "name": "service5",
            "reservation": 200,
            "utilization": 40
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/cloud/byconsume', function (req, res) {
    addDelay();
    var data = [
        { id: 1, name: 't2.small', age: 24, location: 'Lagos', level: 'stage-1', },
        { id: 2, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});




app.post('/api/scenario', function (req, res) {
    addDelay();
    var data = [];
    switch (req.query.name) {
        case "CostDetailsDashboard":
            data = getFlamingoData();
            break;
        case "CostDashboard":
            data = getFlamingoData();
            break;
        case "AdministrationDashboard":
            data = getAdministrationDashboard();
            break;
        case "Manage Users":
            data = getManageUsersData();
            break;
        case "TabContainer":
            data = [
                {
                    subNodeTitle: 'EC2',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: 'EC2 Spending',
                            type: 'summaryGraph',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: { deploy: "Mounted", build: "Released" },
                        },
                        {
                            id: 9,
                            leafTitle: 'Instances',
                            type: 'datatable',
                            apiKey: 'dataTableSummaryAPI',
                            size: 12,
                            metrics: { contain: 'instance data' },
                            columns: [
                                { name: 'S/N' },
                                { name: 'Name', },
                                { name: 'Age', },
                                { name: 'Location', },
                                { name: 'Level', },
                                { name: 'mood', },
                                { name: 'Status', type: 'progress' },
                                { name: 'Action', type: 'drill-down', onColumnIndex: [1, 2, 3], drillTo: 'detail' }
                            ]
                        },
                    ]
                },
                {
                    subNodeTitle: 'RedShift',
                    leafs: [
                        {
                            id: 11,
                            leafTitle: 'RedShift Spending',
                            type: 'summary',
                            apiKey: 'summaryFlemingoAPI',
                            size: 3,
                            metrics: 'DEPLOYER_RS',

                        },
                        {
                            id: 12, leafTitle: 'Red shift Spending',
                            type: 'summary',
                            apiKey: 'costsFlemingoAPI',
                            size: 3,
                            metrics: 'CONTAINER_RS',
                        },
                        {
                            id: 13, leafTitle: 'Top 10 Services by Memory',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_RS',
                        },
                        {
                            id: 14, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar',
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_RS',
                        },
                        {
                            id: 15, leafTitle: 'Top 10 Services by Network',
                            type: 'bar',
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'SERVICE_RS',
                        }
                    ]
                }
            ];
        case "New Group":
            data = getGroupUIData();
            break;
        default:
            data = componentsData();
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/scenario/modal', function (req, res) {
    addDelay();
    var data = [];

    switch (req.query.name) {
        case 'InstanceStateChangeModal':
        case 'InstanceTypeChangeModal':
            data = [
                {
                    actionAPIKey: 'saveInstanceTypeChangeAPI',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: 'Instance Type',
                            type: 'select',
                            apiKey: 'listInstanceTypeAPI',
                            defSelectKey: 'current',
                            helperText: 'Please select instance type',
                            metrics: '{ "group" : "AWS Assured"}',
                        },
                        {
                            id: 2,
                            leafTitle: 'Volume size',
                            type: 'text-input',
                            defSelectKey: 'costMtm',
                            helperText: 'Min: 1GB, Max: 200GB ',
                            metrics: '{ "group" : "AWS Assured"}',
                        },
                        {
                            id: 3,
                            leafTitle: 'Resource',
                            type: 'text-input',
                            defSelectKey: 'resourceId',
                            helperText: 'Enter resource name',
                            metrics: '{ "entity" : "f-5434"}',
                        },
                        {
                            id: 4,
                            leafTitle: 'State',
                            type: 'select',
                            apiKey: 'listStateAPI',
                            defSelectKey: 'state',
                            helperText: 'Enter State value',
                        },
                    ]
                }
            ]
            break;
        case 'ScaleInOut':
            data = [
                {
                    actionAPIKey: 'saveInstanceTypeChangeAPI',
                    enableDisableControlAPIKey: 'monitoringStatusAPI',
                    leafs: [
                        {
                            "id": 1,
                            "leafTitle": "Type",
                            "type": "group-radio",
                            "defSelectKey": "elbMonitoringType",
                            "size": 12,
                            "apiKey": "listMonitoringTypeAPI",
                            "helperText": "Please select appropriate monitoring type",
                            "metrics": {}
                        },
                        {
                            "id": 2,
                            "leafTitle": "Instances",
                            "type": "multi-checkbox",
                            "defSelectKey": "instanceId",
                            "helperText": "Please select instances for pool",
                            "size": 12,
                            "apiKey": "listElbInstanceAPI",
                            "metrics": {},
                            "bindLeafData": { "hideWhen": "Pool", "bindWith": "elbMonitoringType", "id": 1, },
                        },
                        {
                            "id": 3,
                            "leafTitle": "Image Id",
                            "type": "select",
                            "size": 12,
                            "apiKey": "listInstanceTypeAPI",
                            "defSelectKey": "selectedImage",
                            "helperText": "Please select image id",
                            "metrics": {},
                            "bindLeafData": { "hideWhen": "No Pool", "bindWith": "elbMonitoringType", "id": 1, },
                        },
                        {
                            "id": 4,
                            "leafTitle": "Threshold",
                            "size": 12,
                            "type": "nested-field-selector",
                            "apiKey": "listElbMetricListAPI",
                            "defSelectKey": "selectedThresholds",
                            inputList: [
                                {
                                    id: "v1",
                                    label: "",
                                }
                            ],
                            "metrics": {}
                        },
                        {
                            "id": 5,
                            "leafTitle": "Minimum Count",
                            "type": "text-input",
                            "size": 6,
                            "defSelectKey": "minimumCount",
                            "helperText": "Please select minimum active count",
                            "metrics": {}
                        },
                        {
                            "id": 6,
                            "leafTitle": "Maximum Count",
                            "type": "text-input",
                            "size": 6,
                            "defSelectKey": "maximumCount",
                            "helperText": "Please select maximum active count",
                            "metrics": {}
                        },
                        {
                            "id": 7,
                            "defSelectKey": "simpleTable",
                            'leafTitle': 'Group Resources',
                            'type': 'datatable',
                            'noDataText': 'Group Resources can\'t be retrieved',
                            "apiKey": "testMetricAPI",
                            'size': 12,
                            'columns': [
                                { name: 'Alert Type', key: 'alertType', },
                                { name: 'Instance ID', key: 'instanceId' },
                                { name: 'Current Instance Type', key: 'current' },
                                { name: 'Suggested Instance Type', key: 'suggested' },
                                { name: 'Resource Id', key: 'resourceId', },
                                { name: 'Usage Date', key: 'usageDate', },
                                { name: 'Current Cost', key: 'costMtm', },
                                { name: 'variance', key: 'variance', },
                            ],
                        },
                    ]
                }
            ]
            break;
        case 'EditEmailPrefs':
            data = [
                {
                    actionAPIKey: 'updateAlertPrefsAPI',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: 'Email',
                            type: 'text-input',
                            inputType: 'string',
                            defSelectKey: 'email',
                            helperText: 'User email adress',
                            metrics: '{ "email" : "user_email"}',
                        },
                        {
                            id: 2,
                            leafTitle: "Alert Items",
                            type: "multi-checkbox",
                            defSelectKey: "preferences",
                            helperText: "Please select Preferences",
                            size: 12,
                            apiKey: "listAlertItemsAPI",
                            metrics: {},
                        },
                    ]
                }
            ]
            break;
        case 'AddEditUserModal':
            data = [
                {
                    actionAPIKey: 'updateUserAPI',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: 'Email',
                            type: 'text-input',
                            inputType: 'string',
                            defSelectKey: 'email',
                            helperText: 'User email adress',
                            metrics: '{ "email" : "user_email"}',
                        },
                        {
                            id: 2,
                            leafTitle: 'Password',
                            type: 'text-input',
                            inputType: 'password',
                            defSelectKey: 'password',
                            helperText: 'Should be combination of ',
                        },
                        {
                            id: 3,
                            leafTitle: 'Confirm Password',
                            type: 'text-input',
                            inputType: 'password',
                            defSelectKey: 'cofirmPassword',
                            helperText: 'Re-enter to validate',
                        },
                        {
                            id: 4,
                            leafTitle: "Role",
                            type: "group-radio",
                            defSelectKey: "role",
                            size: 12,
                            apiKey: "listAvailableRoles",
                            helperText: "Please select appropriate role",
                        },
                        {
                            id: 5,
                            leafTitle: "Accounts",
                            type: "multi-checkbox",
                            defSelectKey: "accounts",
                            helperText: "Please select Accounts",
                            size: 12,
                            apiKey: "listAccountsAPI",
                            metrics: {},
                        },
                    ]
                }
            ]
            break;

        case 'EditThresholdsModal':
            data = [
                {
                    actionAPIKey: 'saveInstanceTypeChangeAPI',
                    leafs: [
                        {
                            "id": 1,
                            "leafTitle": "Idle Instances",
                            "size": 12,
                            "type": "nested-field-selector",
                            "apiKey": "listElbMetricListAPI",
                            "defSelectKey": "idleInstances",
                            inputList: [
                                {
                                    id: "v1",
                                    label: "Min",
                                },
                                {
                                    id: "v2",
                                    label: "Max",
                                }
                            ],
                            "metrics": {},
                        },
                    ]
                }
            ];
            break;
        case 'AddEditEnvironmentModal':
            data = [
                {
                    "actionAPIKey": "addEditEnvironmentAPI",
                    "enableDisableControlAPIKey": "environmentStatusAPI",
                    "controlKeyTitle": "Collection",
                    "leafs": [
                        {
                            "id": 10,
                            "leafTitle": "Environment Type",
                            "type": "group-radio",
                            "defSelectKey": "type",
                            "size": 12,
                            "apiKey": "envTypeListAPI",
                            "helperText": "Please select Environment Type"
                        },
                        {
                            "id": 11,
                            "leafTitle": "Connection Parameters",
                            "size": 12,
                            "type": "nested-field-input",
                            "apiKey": "envConnParamListAPI",
                            "defSelectKey": "awsConnectParams",
                            "helperText": "Please add appropriate connection properties",
                            "metrics": {
                                "types": [
                                    "AWS"
                                ]
                            },
                            "inputList": [
                                {
                                    "id": "str1",
                                    "label": ""
                                }
                            ],
                            "bindLeafData": {
                                "hideWhen": "KUBERNETES",
                                "bindWith": "type",
                                "id": 10
                            }
                        },
                        {
                            "id": 12,
                            "leafTitle": "Connection Parameters",
                            "size": 12,
                            "type": "nested-field-input",
                            "apiKey": "envConnParamListAPI",
                            "defSelectKey": "kubernetesConnParams",
                            "metrics": {
                                "types": [
                                    "KUBERNETES"
                                ]
                            },
                            "helperText": "Please add appropriate connection properties",
                            "inputList": [
                                {
                                    "id": "str1",
                                    "label": ""
                                }
                            ],
                            "bindLeafData": {
                                "hideWhen": "Amazon AWS",
                                "bindWith": "type",
                                "id": 10
                            }
                        }
                    ]
                }
            ];
            break;
        case 'EditAutoGroupModal':
            data = [
                {
                    actionAPIKey: 'saveInstanceTypeChangeAPI',
                    leafs: [
                        {
                            "id": 1,
                            "leafTitle": "Idle Instances",
                            "size": 12,
                            "type": "nested-field-selector",
                            "inputType": 'chip',
                            "apiKey": "listElbMetricListAPI",
                            "defSelectKey": "idleInstances",
                            inputList: [
                                {
                                    id: "v1",
                                    label: "Min",
                                },
                                {
                                    id: "v2",
                                    label: "Max",
                                }
                            ],
                            "metrics": {},
                        },
                    ]
                }
            ];
            break;
        case "AddGroup":
        case "EditGroup":
            data = manageGroup();
            break;
        case "AutoGroup":
            data = autoGroup();
            break;
        default:
            data = drillDownData();
            break;
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);

});


app.post('/api/instance/singular', function (req, res) {

    addDelay();
    var data = []
    if (req.body.filters.timeFilter === 'Last 30 Days') {
        data = [{ "name": "m5.xlarge", "value": 684.52, "unit": "$" },
        { "name": "t3.xlarge", "value": 336.79, "unit": "$" },
        { "name": "c5.2xlarge", "value": 320.17, "unit": "$" },
        { "name": "gp2", "value": 168.63, "unit": "$" },
        { "name": "t2.medium", "value": 158.41, "unit": "$" },
        { "name": "t3.large", "value": 128.93, "unit": "$" },
        { "name": "t3.medium", "value": 54.3, "unit": "$" },
        { "name": "t9.large", "value": 250.85, "unit": "$" },
        { "name": "p2.medium", "value": 336.23, "unit": "$" },
        { "name": "t2.small", "value": 432.67, "unit": "$" }
        ];
    } else {
        data = [{ "name": "m5.xlarge", "value": 684.52, "unit": "$" },
        { "name": "c3.xlarge", "value": 336.79, "unit": "$" },
        { "name": "c3.2xlarge", "value": 320.17, "unit": "$" },
        { "name": "c32", "value": 168.63, "unit": "$" },
        { "name": "c3.medium", "value": 158.41, "unit": "$" },
        ];
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error testing in progress" });
    res.status(200).send(data);
});

app.post('/api/action/instancetype', function (req, res) {
    addDelay();
    var data = ['t1.small', 't5.medium', 'm3.medium', 't1.large', 't4.micro', 'm1.small'];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/action/state', function (req, res) {
    addDelay();
    var data = ['Start', 'Stop'];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});





app.post('/api/user/environment/addeditenvironment', function (req, res) {

    var data = {
        key: 'SAVE_INST',
        variant: 'success',
        message: 'Details saved succesfully, refereshing your experience',
    };

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send("Internal Server Error");
    res.status(200).send(data);
});

app.post('/api/action/instancetypechange', function (req, res) {

    var data = {
        key: 'SAVE_INST',
        variant: 'success',
        message: 'Instance details saved succesfully',
    };

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send("Internal Server Error");
    res.status(200).send(data);
});

app.post('/list/resources', function (req, res) {

    var data = ['res-123', 'res-1563', 'res-64546', 'res-6423', 'res-9787', 'res-5534'];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send("Internal Server Error");
    res.status(200).send(data);
});

app.post('/api/resource/summary', function (req, res) {

    var data = [
        [{ title: 'Account Id', value: '1234' }, { title: 'Last spending', value: '100.30 $' }],
        [{ title: 'AWS Id', value: '543' }, { title: 'Instance location', value: 'US-East' }],
        [{ title: 'Transaction Amount', value: '320.5000' }],
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/action/elbmonitoringtype', function (req, res) {

    var data = [
        { "name": "Pool", "selected": false },
        { "name": "No Pool", "selected": true },
        { "name": "Hybrid", "selected": false },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/action/availableroles', function (req, res) {

    var data = [
        { "name": "Admin", "selected": false },
        { "name": "Power User", "selected": true },
        { "name": "Viewer", "selected": false },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/action/elbinstancelist', function (req, res) {

    var data = [
        { "name": "i-abc1234567", "selected": true },
        { "name": "i-1234678998", "selected": true },
        { "name": "i-adbc123456", "selected": false },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/alertItemList', function (req, res) {

    var data = [
        { "name": "Billing", "selected": true },
        { "name": "Utilization", "selected": true },
        { "name": "Action", "selected": false },
        { "name": "Kubernetes", "selected": false },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});




app.post('/api/action/accountsList', function (req, res) {

    var data = [
        { "name": "12323434", "selected": true },
        { "name": "324432443", "selected": true },
        { "name": "4324314324", "selected": false },
        { "name": "647909876544", "selected": false },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/elbmetriclist', function (req, res) {

    var data =
        [
            { "name": "CPU utilization", "key": "CPU_UTILIZATION", "defaultValues": { "v1": 80, "v2": 200 }, "appearDefault": true },
            { "name": "Memory utilization", "key": "MEMORY_UTILIZATION", "defaultValues": { "v1": 10, "v2": 20 } },
            { "name": "Network rate", "key": "NETWORK_RATE", "defaultValues": { "v1": 40, "v2": 50 } },
            { "name": "Disk I/O rate", "key": "DISK_IO_RATE", "defaultValues": { "v1": 500, "v2": 600 }, "appearDefault": true },
            { "name": "Network Util", "key": "NETWORK_UTIL", "defaultValues": { "v1": 8000, "v2": 20000 } },
            { "name": "Nginx CPU utilization", "key": "NGINX_CPU_UTILIZATION", "defaultValues": { "v1": 20, "v2": 600 } }
        ]

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/action/elbmonitoringstatus', function (req, res) {

    var data = { "status": true }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/user/userlist', function (req, res) {
    var data = [
        { email: 'i.am.test.user@gmail.com', role: 'Admin', accounts: '3123143' },
        { email: 'a2i.user@hotmail.com', role: 'Chain Admin', accounts: '535343' },
        { email: 'power.admin@global.in', role: 'API list', accounts: '12345' },
        { email: 'admin.user@yahoo.in', role: 'Network Admin', accounts: '6546743' },
        { email: 'chain.clouds@global.com', role: 'Solo', accounts: '12343243245' },
        { email: 'acq.123@gmail.com', role: 'View', accounts: '4234324' },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);


});

app.post('/api/user/alertemaillist', function (req, res) {

    var data = [
        { email: 'i.am.test.user@gmail.com', billing: true, utilization: true, action: false, kubernetes: true, },
        { email: 'a2i.user@hotmail.com', billing: false, utilization: true, action: true, kubernetes: true, },
        { email: 'power.admin@global.in', billing: true, utilization: true, action: true, kubernetes: true, },
        { email: 'admin.user@yahoo.in', billing: true, utilization: true, action: false, kubernetes: false, },
        { email: 'chain.clouds@global.com', billing: true, utilization: false, action: true, kubernetes: false, },
        { email: 'acq.123@gmail.com', billing: false, utilization: false, action: true, kubernetes: false, },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/updatealertprefs', function (req, res) {

    var data = {
        key: 'UPDATE_PREF',
        variant: 'success',
        message: 'Email preferences updated succesfully',
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/updateUser', function (req, res) {

    var data = {
        key: 'UPDATE_USER',
        variant: 'success',
        message: 'User list updated succesfully',
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/group/save', function (req, res) {

    var data = {
        key: 'UPDATE_GROUP',
        variant: 'success',
        message: 'Group added succesfully',
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/user/deleteuser', function (req, res) {

    var data = {
        key: 'UPDATE_PREF',
        variant: 'success',
        message: 'Email preferences deleted succesfully',
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/user/navs', function (req, res) {

    var data = {
        defalultLandingLink: '/schedule',
        navigations: [
            { name: 'Admin', link: '/admin', icon: 'InboxIcon', isSetting: true, page: 'FlamingoPage' },

            { name: 'Cost Dashboard', link: '/costdashboard', icon: 'InboxIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Cost Details', link: '/costdetails', icon: 'InboxIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Recommendation Dashboard', link: '/recommendationdashboard', icon: 'ReceiptIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Recommendation Details', link: '/recommendationdetails', icon: 'ReceiptIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Action Dashboard', link: '/actiondashboard', icon: 'ReceiptIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Action Details', link: '/actiondetails', icon: 'ReceiptIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Alert Dashboard', link: '/alertsdashboard', icon: 'AddAlert', isSetting: false, page: 'FlamingoPage' },
            { name: 'Alerts Details', link: '/alertsdetails', icon: 'AddAlert', isSetting: false, page: 'FlamingoPage' },
            { name: 'Utilization Dashboard', link: '/utilizationdashboard', icon: 'ShowChart', isSetting: false, page: 'FlamingoPage' },
            { name: 'Utilization Details', link: '/utilizationdetailsdashboard', icon: 'ShowChart', isSetting: false, page: 'FlamingoPage' },
            { name: 'Container Dashboard', link: '/containerdashboard', icon: 'StarIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Container Details', link: '/containerdetails', icon: 'StarIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Application Dashboard', link: '/application', icon: 'StarIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Application Details', link: '/applicationdetails', icon: 'StarIcon', isSetting: false, page: 'FlamingoPage' },
            { name: 'Startup/shutdown', link: '/schedule', icon: 'SendIcon', isSetting: false, page: 'Schedule' },
            { name: 'New Group', link: '/newgroup', icon: 'InboxIcon', isSetting: false, page: 'FlamingoPage' },

            { link: '/summary', page: 'Dashboard', },
            { link: '/report', page: 'Dashboard', },
            { link: '/alerts', page: 'Dashboard', },
            { link: '/group', page: 'Group', },
            { link: '/EC2Instance', page: 'EC2Instance', },
            { link: '/containers', page: 'ContainerPage', },
            { link: '/applicationcassandra', page: 'ApplicationCassandra', },
            { link: '/components', page: 'ComponentsPage', },

            { link: '/detail/:id', page: 'DetailView', },
            { link: '/drill', page: 'DetailView', },

            /***** Keep public exposed URL(s) at very bottom *****/
            { link: '/login', page: 'Login', },
            { link: '/register', page: 'RegisterPage', },
        ]
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});




app.post('/api/user/environment/environmentlist', function (req, res) {

    var data = [
        {
            "resourceId": "res-64546",
            "suggested": "m1.small",
            "current": "t1.large",
            "usageDate": "2019-01-01",
            "costDailyAverage": 3589467.197,
            "costCurrent": 85743.31,
            "costMtm": 756.91,
            "instanceId": 'i-783459',
            "action": '',
            "alertType": "success",
        },
        {
            "resourceId": "res-9787",
            "alertType": "danger",
            "current": "t5.medium",
            "suggested": "m3.medium",
            "instanceId": 'i-807331824280',
            "usageDate": "2018-12-30",
            "costDailyAverage": 371.197,
            "costCurrent": 2822.31,
            "costMtm": 3935.91,
            "action": '',
        },
        {
            "resourceId": "res-231432",
            "alertType": "warning",
            "current": "r66.medium",
            "suggested": "re3.medium",
            "instanceId": 'y-fsdgff31824280',
            "usageDate": "2014-09-30",
            "costDailyAverage": 4321.197,
            "costCurrent": 43243.43,
            "costMtm": 424.43,
            "action": '',
        }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/user/environment/environmentstatus', function (req, res) {

    var data = { "status": true };

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/user/environment/typelist', function (req, res) {

    var data = [{ "name": "Amazon AWS", "key": "AWS", "selected": false }, { "name": "KUBERNETES", "key": "KUBERNETES", "selected": true }];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/user/environment/connectionparamlist2', function (req, res) {

    var data = [{ "name": "ARN List", "key": "AWS_ARN", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Bucket Name", "key": "BILLING_BUCKET_NAME", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Bucket Region", "key": "BILLING_BUCKET_REGION", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Report Prefix", "key": "BILLING_REPORT_PREFIX", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Report Name", "key": "BILLING_REPORT_NAME", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/user/environment/connectionparamlist', function (req, res) {

    var data = [
        {
            "name": "User Name",
            "key": "KUBERNETES_USER_NAME",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "Password",
            "key": "KUBERNETES_PASSWORD",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "URL",
            "key": "KUBERNETES_URL",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "Host",
            "key": "KUBERNETES_SERVICE_HOST",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "Port",
            "key": "KUBERNETES_SERVICE_PORT",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "CA Cert",
            "key": "KUBERNETES_SERVICE_CA_CRT",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "Token",
            "key": "KUBERNETES_SERVICE_TOKEN",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "Verify SSL",
            "key": "KUBERNETES_SERVICE_VERIFYSSL",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "Client Key",
            "key": "KUBERNETES_CLIENT_KEY",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        },
        {
            "name": "Client Key Data",
            "key": "KUBERNETES_CLIENT_KEYDATA",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "a"
            }
        }
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/user/threshold/thresholdlist', function (req, res) {

    var data = [
        { email: 'i.am.test.user@gmail.com', billing: true, utilization: true, action: false, kubernetes: true, },
        { email: 'a2i.user@hotmail.com', billing: false, utilization: true, action: true, kubernetes: true, },
        { email: 'power.admin@global.in', billing: true, utilization: true, action: true, kubernetes: true, },
        { email: 'admin.user@yahoo.in', billing: true, utilization: true, action: false, kubernetes: false, },
        { email: 'chain.clouds@global.com', billing: true, utilization: false, action: true, kubernetes: false, },
        { email: 'acq.123@gmail.com', billing: false, utilization: false, action: true, kubernetes: false, },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/grouptypes', function (req, res) {

    var data = [
        { "name": "Tags", "key": "TAGS", "defaultValues": { "v1": 'test' }, "appearDefault": true },
        { "name": "Regions", "key": "REGIONS", "defaultValues": { "v1": '10', } },
        { "name": "Availability Zones", "key": "AVAIL_ZONES", "defaultValues": { "v1": 40, } },
        { "name": "VPCs", "key": "VPC", "defaultValues": { "v1": '500', }, "appearDefault": true },
        { "name": "OS Types", "key": "OS_TYPE", "defaultValues": { "v1": '8000', } },
        { "name": "Instance Types", "key": "INST_TYPES", "defaultValues": { "v1": '20', } },
        { "name": "Instance Status", "key": "INST_STATUS", "defaultValues": { "v1": '20', } },
    ];

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.get('/test', function (req, res) {

    var data = 'Service is up and running.';

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

var listener = app.listen(8080, function () {
    console.log('Mock server is up and listening on port ' + listener.address().port);
});
