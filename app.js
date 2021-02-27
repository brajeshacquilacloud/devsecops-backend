var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080
const users = require('./mock/users.json');
const cspOverview = require('./mock/cspOverview.json');
const cspBilling = require('./mock/cspBilling.json');
const rateLine = require('./mock/rateLine.json');
const ratePack = require('./mock/ratePack.json');
const managePack = require('./mock/managePack.json');
const adminSettings = require('./mock/adminSettings.json');
const govOverview = require('./mock/govOverview.json');
const finDomain = require('./mock/finDomain.json');
const newFinDomain = require('./mock/newFinDomain.json');
const billProgress = require('./mock/billProgress.json');
const rateLinesFakeData = require('./mock/data/rateLinesFakeData.json');
const rateLinesFakeDataPaginated = require('./mock/data/rateLinesFakeDataPaginated.json');
const treeDataFake = require('./mock/data/treeData.json');
const cloudServiceFakeData = require('./mock/data/cloudServiceData.json');

const navs = require('./mock/navs.json');
const cspCustomerProfile = require("./mock/customerProfile.json")
const infoGraph = require("./mock/data/infoGraph.json")


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

function setResponseHeaders(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
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
                            leafTitle: 'Cost by test view columns',
                            type: 'datatable',
                            apiKey: 'testMetricAPI',
                            customToolBarConfig: { "download": false, "print": false, "search": true, "viewColumns": true },
                            noDataText: 'Group Resources can\'t be retrieved',
                            size: 12,
                            metrics: { contain: 'instance data' },
                            columns: [
                                { name: 'Alert', key: 'alertType', display: true },
                                { name: 'Instance Id', key: 'instanceId', display: true },
                                { name: 'Current', key: 'current', display: true },
                                { name: 'Noance', key: 'noance', "type": "status", display: true },
                                { name: 'Comments', key: 'comments', display: true },
                                { name: 'Review', key: 'review', display: true },
                                { name: 'Liability', key: 'liability', display: false },
                                { name: 'Scheduled', key: 'scheduled', display: false },
                                { name: 'Suggested Instance Type', key: 'suggested', display: true },
                                { name: 'Resource Id', key: 'resourceId', display: true },
                                { name: 'Usage Date', key: 'usageDate', display: false },
                                { name: 'Trasaction Date', key: 'usageDate', display: true },
                                { name: 'Cost', key: 'costMtm', display: true, type: 'amount' },
                                { name: 'variance', key: 'variance', display: true },
                                {
                                    name: 'Action', key: 'action', type: 'drill-down', drillTo: 'modal', display: true,
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
                            id: 777,
                            leafTitle: 'Demographic View',
                            type: 'line',
                            apiKey: 'linearMetricsAPI',
                            isPro: true,
                            size: 12,
                            drillDown: {
                                drillTo: 'detail',
                            },
                            metrics: 'SOLID_STATE',
                        },
                        {
                            id: 19999,
                            leafTitle: 'EC2 Spending',
                            type: 'summaryGraph',
                            apiKey: 'awsYearlySpendingAPI',
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
                                { name: 'Alert Type', key: 'alertType', display: true },
                                { name: 'Instance ID', key: 'instanceId', display: true },
                                { name: 'Current Instance Type', key: 'current', display: true },
                                { name: 'Suggested Instance Type', key: 'suggested', display: true },
                                { name: 'Resource Id', key: 'resourceId', display: true },
                                { name: 'Usage Date', key: 'usageDate', display: true },
                                { name: 'Current Cost', key: 'costMtm', display: true },
                                { name: 'variance', key: 'variance', display: true },
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
                                { name: 'Alert Type', key: 'alertType', display: true },
                                { name: 'Instance ID', key: 'instanceId' },
                                { name: 'Current Instance Type', key: 'current' },
                                { name: 'Suggested Instance Type', key: 'suggested', display: true },
                                { name: 'Resource Id', key: 'resourceId', display: true },
                                { name: 'Usage Date', key: 'usageDate', display: true },
                                { name: 'Current Cost', key: 'costMtm', display: true },
                                { name: 'variance', key: 'variance', display: true },
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
                            apiKey: 'awsYearlySpendingAPI',
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
                            type: 'bar', isPro: true,
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
                                    noDataText: 'No TCP info available right now',
                                    metrics: { contain: 'instance data' },
                                    defaultRowPerPage: 8,
                                    hideToolBar: true,
                                    columns: [
                                        { name: 'S/N', key: 'id', display: true },
                                        { name: 'Instance', key: 'name', display: true },
                                        { name: 'Age', key: 'age', display: true },
                                        { name: 'Location', key: 'location' },
                                        { name: 'Type', key: 'level', display: true },
                                        { name: 'mood', key: 'mood', display: true },
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
                                        { name: 'Instance', key: 'name', display: true },
                                        { name: 'Location', key: 'location', display: true },
                                        { name: 'Type', key: 'level', display: true },
                                        { name: 'Status', key: 'status', type: 'progress', display: true },
                                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: '0', drillValue: 5, display: true }
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
                                        { name: 'Types', key: 'name', display: true },
                                        { name: 'Places', key: 'location', display: true },
                                        { name: 'Level', key: 'level', display: true },
                                        { name: 'Indicator', key: 'status', type: 'progress', display: true },
                                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5, display: true }
                                    ]
                                },
                                {
                                    id: 9997,
                                    leafTitle: 'Top 10 Services by Instance',
                                    type: 'bar', isPro: true,
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
                                    apiKey: 'awsYearlySpendingAPI',
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
                            type: 'bar', isPro: true,
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 6,
                            metrics: 'SOLID_STATE',

                        },
                        {
                            id: 4324,
                            leafTitle: 'Top 10 Services by Instance',
                            type: 'bar', isPro: true,
                            singular: true,
                            apiKey: 'singularBarAPI',
                            size: 6,
                            metrics: { deploy: "Not deployed", build: "Failed" },
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
                                { name: 'S/N', display: true },
                                { name: 'Instance', display: true },
                                { name: 'Age', display: true },
                                { name: 'Location', display: true },
                                { name: 'Level', display: true },
                            ],
                            metrics: 'TABLE_STATE',

                        },
                        {
                            id: 10,
                            leafTitle: 'Consumers',
                            type: 'bar', isPro: true,
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 9,
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
                                { name: 'Types', key: 'name', display: true },
                                { name: 'Places', key: 'location', display: true },
                                { name: 'Level', key: 'level', display: true },
                                { name: 'Indicator', key: 'status', type: 'progress', display: true },
                                {
                                    name: 'Action', key: 'action',
                                    type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5,
                                    display: true,
                                    drillParams: [
                                        { key: 'name', display: true },
                                    ]
                                }
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
                                    'noDataText': 'Cost by region can\'t be retrieved',
                                    size: 12,
                                    metrics: { contain: 'instance data' },
                                    columns: [
                                        { name: 'Alert Type', key: 'alertType', display: true },
                                        { name: 'Instance ID', key: 'instanceId', display: true },
                                        { name: 'Current Instance Type', key: 'current', display: true },
                                        { name: 'Suggested Instance Type', key: 'suggested', display: true },
                                        { name: 'Resource Id', key: 'resourceId', display: true },
                                        { name: 'Usage Date', key: 'usageDate', display: true },
                                        { name: 'Current Cost', key: 'costMtm', display: true },
                                        { name: 'variance', key: 'variance', display: true },
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
                            type: 'bar', isPro: true,
                            apiKey: 'distByDayAPI',
                            size: 3,
                            metrics: 'MGMT_RS',

                        },
                        {
                            id: 14, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar', isPro: true,
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_RS',

                        },
                        {
                            id: 15, leafTitle: 'Top 10 Services by Network',
                            type: 'bar', isPro: true,
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 6,
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
                            type: 'bar', isPro: true,
                            apiKey: 'distByDayAPI',
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
                            type: 'bar', isPro: true,
                            apiKey: 'distByDayAPI',
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
                                        { name: 'S/N', key: 'id', display: true },
                                        { name: 'Instance', key: 'name' },
                                        { name: 'Location', key: 'location', display: true },
                                        { name: 'Type', key: 'level' },
                                        { name: 'Status', key: 'status', type: 'progress', display: true },
                                    ]
                                },
                                {
                                    id: 11214,
                                    leafTitle: 'Cost by Service Type',
                                    type: 'datatable',
                                    apiKey: 'testMetricAPI',
                                    size: 12,
                                    columns: [
                                        { name: 'Alert Type', key: 'alertType', display: true },
                                        { name: 'Instance ID', key: 'instanceId', display: true },
                                        { name: 'Current Instance Type', key: 'current', display: true },
                                        { name: 'Suggested Instance Type', key: 'suggested', display: true },
                                        { name: 'Resource Id', key: 'resourceId', display: true },
                                        { name: 'Usage Date', key: 'usageDate', display: true },
                                        { name: 'Current Cost', key: 'costMtm', display: true },
                                        { name: 'variance', key: 'variance', display: true },
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
                            type: 'bar', isPro: true,
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_K8',

                        },
                        {
                            id: 25, leafTitle: 'Top 10 Services by Network',
                            type: 'bar', isPro: true,
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 9,
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
                            type: 'bar', isPro: true,
                            apiKey: 'distByDayAPI',
                            size: 3,
                            metrics: 'MGMT_MS',

                        },
                        {
                            id: 30, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar', isPro: true,
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_MS',

                        },
                        {
                            id: 31, leafTitle: 'Top 10 Services by Network',
                            type: 'bar', isPro: true,
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
                            type: 'bar', isPro: true,
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 3,
                            metrics: 'MGMT_B2C',

                        },
                        {
                            id: 35, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar', isPro: true,
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
                                    noDataText: 'No TCP info available right now',
                                    metrics: { contain: 'instance data' },
                                    defaultRowPerPage: 8,
                                    hideToolBar: true,
                                    columns: [
                                        { name: 'S/N', key: 'id', },
                                        { name: 'Instance', key: 'name', display: true },
                                        { name: 'Age', key: 'age', display: true },
                                        { name: 'Location', key: 'location', display: true },
                                        { name: 'Type', key: 'level', display: true },
                                        { name: 'mood', key: 'mood', display: true },
                                        { name: 'Status', key: 'status', type: 'progress', display: true },
                                        {
                                            name: 'Action', key: 'action', type: 'drill-down', drillTo: 'costdashboard', display: true,
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
                                        { name: 'Instance', key: 'name', display: true },
                                        { name: 'Location', key: 'location', display: true },
                                        { name: 'Type', key: 'level', display: true },
                                        { name: 'Status', key: 'status', type: 'progress', display: true },
                                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5, display: true }
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
                            type: 'bar', isPro: true,
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
                            type: 'bar', isPro: true,
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_Azure_ML',
                        },
                        {
                            id: 44, leafTitle: 'Top 10 Services by Network',
                            type: 'bar', isPro: true,
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 9,
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

function EditCustomerScreenData() {
    return [
        {
            leafs: [
                {
                    "id": 1,
                    "leafTitle": "Edit customer",
                    "subTitle": "Sub-title to displayed for Edit customer screen",
                    "size": 6,
                    "type": "complex-form",
                    "dataAPIKey": "listResourceOrderListAPI",
                    "actionAPIKey": "saveInstanceTypeChangeAPI",
                    "subscribedDrillParam": ["email"],
                    "components": [
                        {
                            "title": "Existing Relationship Details",
                            "subComponents": [
                                {
                                    "id": 1,
                                    "title": "Customer Type",
                                    "type": "group-radio",
                                    "defSelectKey": "customerType",
                                    "size": 12,
                                    "apiKey": "billOpsUserTypeListAPI",
                                    "helperText": "Please select Customer Type"
                                },
                                {
                                    "id": 2,
                                    "title": "Customer ID/Name",
                                    "type": "text-input",
                                    "inputType": "string",
                                    "defSelectKey": "customerID",
                                    "size": 12,
                                    "helperText": "Please select Customer ID",
                                    "bindLeafData": [{
                                        "hideWhen": "NEW",
                                        "bindWith": "customerType",
                                        "id": 1
                                    }],
                                    "targetLeafData": {
                                        "tagetWith": "customerType",
                                        "id": 1
                                    }
                                },
                            ]
                        },
                        {
                            "title": "Organization Details",
                            "subComponents": [
                                {
                                    "id": 3,
                                    "title": "Name of the organization",
                                    "type": "text-input",
                                    "inputType": "string",
                                    "defSelectKey": "orgName",
                                    "size": 12,
                                    "helperText": "Please enter name of the organization",
                                    "validation": {
                                        "isRequired": true,
                                        "message": 'Organization is the required field',
                                    },
                                },
                                {
                                    "id": 4,
                                    "title": "Industry Vertical",
                                    "defSelectKey": "industry",
                                    "size": 12,
                                    "type": "select",
                                    "apiKey": "listAWSInstanceTypeAPI",
                                    validation: {
                                        message: 'Atlease one value should be selected',
                                        type: 'range',
                                        min: 1,
                                    },
                                },
                                {
                                    "id": 5,
                                    "title": "Website Address",
                                    "type": "text-input",
                                    "inputType": "string",
                                    "defSelectKey": "website",
                                    "size": 12,
                                    "helperText": "Please enter Website Address",
                                    "validation": {
                                        "isRequired": true,
                                        "type": 'url',
                                        "message": 'Website Address is the required field',
                                    },
                                },
                                {
                                    "id": 6,
                                    "title": "Business turnover",
                                    "defSelectKey": "turnover",
                                    "size": 12,
                                    "type": "select",
                                    "apiKey": "listAWSInstanceTypeAPI",
                                    validation: {
                                        message: 'Atlease one value should be selected',
                                        type: 'range',
                                        min: 1,
                                    },
                                },
                                {
                                    "id": 7,
                                    "title": "Account Type",
                                    "defSelectKey": "accountType",
                                    "size": 12,
                                    "type": "select",
                                    "mode": 'multiple',
                                    "apiKey": "listAWSInstanceTypeAPI",
                                    validation: {
                                        message: 'Atlease one value should be selected',
                                        type: 'range',
                                        min: 2,
                                    },
                                },
                            ]
                        }, {
                            "title": "Business Contact Details",
                            "subComponents": [
                                {
                                    "id": 8,
                                    "title": "First Name",
                                    "type": "text-input",
                                    "inputType": "string",
                                    "defSelectKey": "firstName",
                                    "size": 12,
                                    "helperText": "Please enter your first name",
                                    "validation": {
                                        "isRequired": true,
                                        "message": 'First name is the required field',
                                    },
                                },
                                {
                                    "id": 9,
                                    "title": "Last Name",
                                    "type": "text-input",
                                    "inputType": "string",
                                    "defSelectKey": "lastName",
                                    "size": 12,
                                    "helperText": "Please enter your last name",
                                    "validation": {
                                        "isRequired": true,
                                        "message": 'Last name is the required field',
                                    },
                                },
                                {
                                    "id": 10,
                                    "title": "Designation",
                                    "type": "text-input",
                                    "inputType": "string",
                                    "defSelectKey": "designation",
                                    "size": 12,
                                    "helperText": "Please enter Designation",
                                    "validation": {
                                        "isRequired": true,
                                        "message": 'Designation is the required field',
                                    },
                                },
                                {
                                    "id": 12,
                                    "title": "Phone Number",
                                    "type": "text-input",
                                    "inputType": "number",
                                    "defSelectKey": "phone",
                                    "size": 12,
                                    "helperText": "Please enter Phone Number",
                                    "validation": {
                                        "isRequired": true,
                                        "message": 'Phone Number is the required field',
                                    },
                                },
                                {
                                    "id": 13,
                                    "title": "Email",
                                    "type": "text-input",
                                    "inputType": "string",
                                    "defSelectKey": "email",
                                    "size": 12,
                                    "helperText": "Please enter Email",
                                    "validation": {
                                        "isRequired": true,
                                        "type": 'email',
                                        "message": 'Email is the required field',
                                    },
                                },
                                {
                                    "id": 14,
                                    "title": "Mobile Number",
                                    "type": "text-input",
                                    "inputType": "number",
                                    "defSelectKey": "mobile",
                                    "size": 12,
                                    "helperText": "Please enter Mobile Number",
                                    "validation": {
                                        "isRequired": true,
                                        "message": 'Mobile Number is the required field',
                                    },
                                },
                                {
                                    "id": 15,
                                    "title": "UserId",
                                    "type": "text-input",
                                    "inputType": "number",
                                    "defSelectKey": "userId",
                                    "size": 12,
                                    "helperText": "Please enter User ID",
                                    "validation": {
                                        "isRequired": true,
                                        "message": 'User ID is the required field',
                                    },
                                },
                            ]
                        },
                    ]
                },
                {
                    "id": 2,
                    "leafTitle": "Manage Bill-OPS Users",
                    "type": "datatable",
                    "subscribedDrillParam": ["email"],
                    "apiKey": "listUsersAPI",
                    "size": 6,
                    "noDataText": "No sub-users available",
                    "metrics": {},
                    "defaultRowPerPage": 10,
                    "toolBarActions": [
                        {
                            "toolbarTitle": "Add User",
                            "modalTitle": "Add User",
                            "type": "modal",
                            "componentsAPIKey": "addUserComponentAPI",
                            "actionIcon": "AddBox",
                            "drillParams": [
                                {
                                    "key": "email"
                                }
                            ]
                        },
                        {
                            "toolbarTitle": "Save",
                            "toolbarTooltip": "In order to reflect the changes please click on save after editing table data.",
                            "type": "save",
                            "actionAPIKey": "saveInstanceTypeChangeAPI",
                            "actionIcon": "Save",
                            "drillParams": [
                                {
                                    "key": "email"
                                }
                            ]
                        }
                        , {
                            "toolbarTitle": "Clear",
                            "type": "reset",
                            "actionIcon": "Clear",
                        }
                    ],
                    "columns": [
                        {
                            "name": "Id",
                            "key": "userId",
                            "display": false,
                        },
                        {
                            "name": "Email",
                            "key": "email",
                            "display": true,
                            "filter": true,
                            "filterType": 'textField',
                        },
                        {
                            "name": "Role",
                            "key": "roleName",
                            "display": true,
                            "filter": true,
                            "filterType": 'multiselect',
                        },
                        {
                            "name": "Status",
                            "key": "status",
                            "type": "status",
                            "display": true,
                            "filter": false,
                        },
                        {
                            "name": "Add-On",
                            "key": "status",
                            "type": "checkbox",
                            "display": true,
                            "filter": false,
                        },
                        {
                            "name": "Enable/Disable",
                            "key": "mark",
                            "type": "toggle",
                            "display": true,
                            "filter": false,
                        },
                        {
                            "name": "Severity",
                            "key": "severity",
                            "type": "select",
                            "mode": "default",
                            "apiKey": "listThresholdMetricListAPI",
                            "display": true,
                            "filter": false,
                        },
                        {
                            "name": "Projects",
                            "key": "project",
                            "type": "select",
                            "mode": "multiple",
                            "apiKey": "listThresholdMetricListAPI",
                            "display": true,
                            "filter": false,
                        },
                        {
                            "name": "File Name",
                            "key": "fileName",
                            "display": true,
                        },
                        {
                            "name": "Account",
                            "key": "accounts",
                            "display": true,
                            "filter": true,
                            "filterType": 'multiselect',
                        },
                        {
                            "name": "Delete",
                            "key": "action",
                            "type": "delete",
                            "display": true,
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
                            "display": true,
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
                        },
                        {
                            "name": "Edit Customer",
                            "key": "action",
                            "type": "drill-down",
                            "display": true,
                            "drillTo": "drill",
                            "drillKey": "edit-customer",
                            "drillParams": [{ "key": "userId" }, { "key": "email" }],
                        },
                        {
                            "name": "Download",
                            "key": "action",
                            "type": "download",
                            "actionIcon": "Download",
                            "display": true,
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
                    ]
                },
                {
                    id: 3,
                    leafTitle: 'List the customers',
                    type: 'datatable',
                    apiKey: 'testMetricAPI',
                    "subscribedDrillParam": ["email", "userId"],
                    size: 12,
                    noDataText: 'Data for Cost by Service Type is not currently available',
                    columns: [
                        { name: 'Alert Type', key: 'alertType', display: true },
                        { name: 'Instance ID', key: 'instanceId', display: true },
                        { name: 'Current Instance Type', key: 'current', display: true },
                        { name: 'Suggested Instance Type', key: 'suggested', display: true },
                        { name: 'Resource Id', key: 'resourceId', display: true },
                        { name: 'Usage Date', key: 'usageDate', display: true },
                        { name: 'Current Cost', key: 'costMtm', display: true },
                        { name: 'variance', key: 'variance', display: true },
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
                }
            ]
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
                    apiKey: 'awsYearlySpendingAPI',
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
                        { name: 'Alert Type', key: 'alertType', display: true },
                        { name: 'Instance ID', key: 'instanceId', display: true },
                        { name: 'Current Instance Type', key: 'current', display: true },
                        { name: 'Suggested Instance Type', key: 'suggested', display: true },
                        { name: 'Resource Id', key: 'resourceId', display: true },
                        { name: 'Usage Date', key: 'usageDate', display: true },
                        { name: 'Current Cost', key: 'costMtm', display: true },
                        { name: 'variance', key: 'variance', display: true },
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
                        { name: 'S/N', key: 'id', display: true },
                        { name: 'Instance', key: 'name', display: true },
                        { name: 'Location', key: 'location', display: true },
                        { name: 'Type', key: 'level', display: true },
                        { name: 'Status', key: 'status', type: 'progress', display: true },
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
                    type: 'bar', isPro: true,
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
                            noDataText: 'No TCP info available right now',
                            metrics: { contain: 'instance data' },
                            defaultRowPerPage: 8,
                            hideToolBar: true,
                            columns: [
                                { name: 'S/N', key: 'id', display: true },
                                { name: 'Instance', key: 'name', display: true },
                                { name: 'Age', key: 'age', display: true },
                                { name: 'Location', key: 'location', display: true },
                                { name: 'Type', key: 'level', display: true },
                                { name: 'mood', key: 'mood', display: true },
                                { name: 'Status', key: 'status', type: 'progress', display: true },
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
                                { name: 'Instance', key: 'name', display: true },
                                { name: 'Location', key: 'location', display: true },
                                { name: 'Type', key: 'level', display: true },
                                { name: 'Status', key: 'status', type: 'progress', display: true },
                                { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5, display: true }
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
                                { name: 'Types', key: 'name', display: true },
                                { name: 'Places', key: 'location', display: true },
                                { name: 'Level', key: 'level', display: true },
                                { name: 'Indicator', key: 'status', type: 'progress', display: true },
                                { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5, display: true }
                            ]
                        },
                    ]
                },
                {
                    id: 5,
                    leafTitle: 'Top 10 Services by Memory',
                    type: 'bar', isPro: true,
                    noDataText: 'No Services Info',
                    apiKey: 'accomodationsyFlemingoAPI',
                    size: 3,
                    metrics: { deploy: "Not deployed", build: "Failed" },

                },
                {
                    id: 12,
                    leafTitle: 'Top 10 Services by Instance',
                    type: 'bar', isPro: true,
                    singular: true,
                    apiKey: 'singularBarAPI',
                    size: 6,
                    metrics: { deploy: "Not deployed", build: "Failed" },
                },
                {
                    id: 6,
                    leafTitle: 'Top 10 Services by CPU',
                    type: 'bar', isPro: true,
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
                        { name: 'S/N', display: true },
                        { name: 'Instance', display: true },
                        { name: 'Age', display: true },
                        { name: 'Location', display: true },
                        { name: 'Level', display: true },
                    ],
                    apiKey: 'cloudConsumeAPI',
                    size: 3,
                    metrics: 'TABLE_STATE',
                },
                {
                    id: 9,
                    leafTitle: 'Top 5 Consumers',
                    type: 'bar', isPro: true,
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
                        { name: 'Instance', key: 'name', display: true },
                        { name: 'Age', key: 'age', display: true },
                        { name: 'mood', key: 'mood', display: true },
                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'drill', drillKey: 0, drillValue: 5, display: true }
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
                    "id": 21323,
                    "leafTitle": "Image Id",
                    "type": "select",
                    "size": 12,
                    "mode": "multiple",
                    "apiKey": "listAWSInstanceTypeAPI",
                    "defSelectKey": "selectedImage",
                    "helperText": "Choose Image Id",
                    "metrics": {},
                    validation: {
                        isRequired: true,
                        message: 'Atlease one value should be selected',
                    },
                },
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
                    apiKey: 'awsYearlySpendingAPI',
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
                        { name: 'Alert Type', key: 'alertType', display: true },
                        { name: 'Instance ID', key: 'instanceId', display: true },
                        { name: 'Current Instance Type', key: 'current', display: true },
                        { name: 'Suggested Instance Type', key: 'suggested', display: true },
                        { name: 'Resource Id', key: 'resourceId', display: true },
                        { name: 'Usage Date', key: 'usageDate', display: true },
                        { name: 'Current Cost', key: 'costMtm', display: true },
                        { name: 'variance', key: 'variance', display: true },
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
                        { name: 'S/N', key: 'id', display: true },
                        { name: 'Instance', key: 'name', display: true },
                        { name: 'Location', key: 'location', display: true },
                        { name: 'Type', key: 'level', display: true },
                        { name: 'Status', key: 'status', type: 'progress', display: true },
                        { name: 'Action', key: 'action', type: 'drill-down', drillTo: 'schedule', drillParams: [{ key: 'name' }], display: true }
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
                            "noDataText": "No sub-users available",
                            "metrics": {},
                            "defaultRowPerPage": 10,
                            "toolBarActions": [
                                {
                                    "toolbarTitle": "Add User",
                                    "modalTitle": "Add User",
                                    "type": "modal",
                                    "componentsAPIKey": "addUserComponentAPI",
                                    "actionIcon": "AddBox",
                                    "drillParams": [
                                        {
                                            "key": "email"
                                        }
                                    ]
                                },
                                {
                                    "toolbarTitle": "Save",
                                    "toolbarTooltip": "In order to reflect the changes please click on save after editing table data.",
                                    "type": "save",
                                    "actionAPIKey": "saveInstanceTypeChangeAPI",
                                    "actionIcon": "Save",
                                    "drillParams": [
                                        {
                                            "key": "email"
                                        }
                                    ]
                                }
                                , {
                                    "toolbarTitle": "Clear",
                                    "type": "reset",
                                    "actionIcon": "Clear",
                                }
                            ],
                            "columns": [
                                {
                                    "name": "Id",
                                    "key": "userId",
                                    "display": false,
                                },
                                {
                                    "name": "Email",
                                    "key": "email",
                                    "display": true,
                                    "filter": true,
                                    "filterType": 'textField',
                                },
                                {
                                    "name": "Role",
                                    "key": "roleName",
                                    "display": true,
                                    "filter": true,
                                    "filterType": 'multiselect',
                                },
                                {
                                    "name": "Status",
                                    "key": "status",
                                    "type": "status",
                                    "display": true,
                                    "filter": false,
                                },
                                {
                                    "name": "Add-On",
                                    "key": "status",
                                    "type": "checkbox",
                                    "display": true,
                                    "filter": false,
                                },
                                {
                                    "name": "Enable/Disable",
                                    "key": "mark",
                                    "type": "toggle",
                                    "display": true,
                                    "filter": false,
                                },
                                {
                                    "name": "Severity",
                                    "key": "severity",
                                    "type": "select",
                                    "mode": "default",
                                    "apiKey": "listThresholdMetricListAPI",
                                    "display": true,
                                    "filter": false,
                                },
                                {
                                    "name": "Projects",
                                    "key": "project",
                                    "type": "select",
                                    "mode": "multiple",
                                    "apiKey": "listThresholdMetricListAPI",
                                    "display": true,
                                    "filter": false,
                                },
                                {
                                    "name": "File Name",
                                    "key": "fileName",
                                    "display": true,
                                },
                                {
                                    "name": "Account",
                                    "key": "accounts",
                                    "display": true,
                                    "filter": true,
                                    "filterType": 'multiselect',
                                },
                                {
                                    "name": "Delete",
                                    "key": "action",
                                    "type": "delete",
                                    "display": true,
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
                                    "display": true,
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
                                },
                                {
                                    "name": "Overview",
                                    "key": "action",
                                    "type": "drill-down",
                                    "display": true,
                                    "drillTo": "overview",
                                    "drillParams": [
                                        {
                                            "key": "userId"
                                        },
                                        {
                                            "key": "email"
                                        }
                                    ],
                                    "componentsAPIKey": "customerOverviewDataAPI"
                                },
                                {
                                    "name": "Edit Customer",
                                    "key": "action",
                                    "type": "drill-down",
                                    "display": true,
                                    "drillTo": "drill",
                                    "drillKey": "edit-customer",
                                    "drillParams": [{ "key": "userId" }, { "key": "email" }],
                                },
                                {
                                    "name": "Download",
                                    "type": "download",
                                    "key": "action",
                                    "fileNameKey": "fileName",
                                    "actionIcon": "PDF",
                                    "display": true,
                                    "apiKey": "downloadBillOpsPOAPI",
                                    "requestParams": [
                                        {
                                            "key": "userId"
                                        },
                                        {
                                            "key": "email"
                                        }
                                    ]
                                },
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
                                    "key": "resourceId",
                                    "display": true
                                },
                                {
                                    "name": "Name",
                                    "key": "current",
                                    "display": true,
                                },
                                {
                                    "name": "Type",
                                    "key": "suggested",
                                    "display": true,
                                },
                                {
                                    "name": "Status",
                                    "key": "status",
                                    "display": true,
                                },
                                {
                                    "name": "Delete",
                                    "key": "action",
                                    "type": "delete",
                                    "display": true,
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
                                    "name": "Email",
                                    "key": "email",
                                    "display": true,
                                },
                                {
                                    "name": "Customer Id",
                                    "key": "customerId",
                                    "display": true,
                                },
                                {
                                    "name": "Provider Subscription Id",
                                    "key": "providerSubscriptionId",
                                    "display": false,
                                },
                                {
                                    "name": "Delete",
                                    "key": "action",
                                    "type": "delete",
                                    "display": true,
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
                                    "name": "Jump",
                                    "key": "action",
                                    "type": "drill-down",
                                    "drillTo": "drill",
                                    'nodeIndex': 0,
                                    "subNodeIndex": 0,
                                    'tabIndex': 2,
                                    "drillKey": "azurecspdashboard",
                                    "drillParams": [{ "key": "customerId" }, { "key": "providerSubscriptionId" }]
                                },
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
                                            "key": "strThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold",
                                            "display": true,
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
                                            "name": "Email",
                                            "key": "email",
                                            "display": true,
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
                                            "key": "minimumThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold",
                                            "display": true,
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
                                            "key": "strThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold",
                                            "display": true,
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
                                            "key": "strThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold",
                                            "display": true,
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
                                            "key": "strThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Minimum Threshold",
                                            "key": "minimumThreshold",
                                            "display": true,
                                        },
                                        {
                                            "name": "Maximum Threshold",
                                            "key": "maximumThreshold",
                                            "display": true,
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
                        { name: 'Email', key: 'email', display: true },
                        { name: 'Role', key: 'role', display: true },
                        { name: 'Account', key: 'accounts', display: true },
                        {
                            name: 'Delete', key: 'action', type: 'delete', apiKey: 'deleteUserAPI', display: true,
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


function getEnvironmentsUIData() {
    return [{
        leafs: [
            {
                id: 1,
                type: 'tile',
                apiKey: 'environmentListAPI',
                size: 12,
                tileActions: [
                    {
                        key: 'edit',
                        type: 'modal',
                        modalTitle: 'Edit Environment',
                        componentsAPIKey: 'editEnvComponentAPI',
                    },
                    {
                        key: 'delete',
                        type: 'delete',
                        title: 'Confirm',
                        bodyText: 'This action can\'t be undone, please perform only if you are aware about consequences about this action.',
                        apiKey: 'deleteUserAPI',
                    }
                ]
            },
        ]
    }]
}

function getServicesUIData() {
    return [{
        leafs: [
            {
                id: 1,
                type: 'card',
                apiKey: 'servicesListAPI',
                size: 12,
            },
        ]
    }]
}

function getRolesUIData() {
    return [{
        leafs: [
            {
                id: 1,
                type: 'tile',
                apiKey: 'rolesListAPI',
                size: 12,
                tileActions: [
                    {
                        key: 'edit',
                        type: 'modal',
                        modalTitle: 'Edit Roles/Permissions',
                        componentsAPIKey: 'editEnvComponentAPI',
                    },
                    {
                        key: 'delete',
                        type: 'delete',
                        title: 'Confirm',
                        bodyText: 'This action can\'t be undone, please perform only if you are aware about consequences about this action.',
                        apiKey: 'deleteUserAPI',
                    }
                ]
            },
        ]
    }]
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
                hideToolBar: false,
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
                customFilters: [
                    {
                        id: 1,
                        defSelectKey: 'region',
                        size: 3,
                        title: 'Region',
                        type: 'select',
                        apiKey: 'listRegionAPI',
                        helperText: 'Please select the region',
                        "metrics": {
                            "types": [
                                "*"
                            ]
                        },
                        validation: {
                            isRequired: true,
                            message: 'At-least one value should be selected',
                        }
                    },
                    {
                        id: 2,
                        defSelectKey: 'cluster',
                        size: 3,
                        title: 'Cluster',
                        type: 'select',
                        apiKey: 'listClusterAPI',
                        disableInitApi: true,
                        helperText: 'Please select the cluster',
                        "metrics": {
                            "types": [
                                "*"
                            ]
                        },
                        "bindLeafData": [{ "bindWith": "region", "id": 1, }],
                        validation: {
                            isRequired: true,
                            message: 'At-least one tenant should be selected',
                        }
                    },
                    {
                        id: 3,
                        defSelectKey: 'instance',
                        size: 3,
                        title: 'Instance',
                        type: 'select',
                        apiKey: 'listAWSInstanceTypeAPI',
                        disableInitApi: true,
                        helperText: 'Please select the tenant',
                        "metrics": {
                            "types": [
                                "*"
                            ]
                        },
                        "bindLeafData": [{ "bindWith": "cluster", "id": 2, }],
                        validation: {
                            isRequired: true,
                            message: 'At-least one tenant should be selected',
                        }
                    }
                ],
                columns: [
                    { name: 'Group name', key: 'name', display: true },
                    { name: 'Type', key: 'type', display: true },
                    { name: 'Status', key: 'status', display: true },
                    { name: 'Resource Count', key: 'rescount', display: true },
                    {
                        name: 'Edit Group', key: 'action', type: 'drill-down', drillTo: 'modal',
                        modalTitle: 'Edit group', display: true,
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
                    selectableRows: 'multiple',
                    columns: [
                        { display: true, name: 'Alert Type', key: 'alertType', isRowSelection: true },
                        { display: true, name: 'Instance ID', key: 'instanceId', isRowSelection: true },
                        { display: true, name: 'Current Instance Type', key: 'current' },
                        { display: true, name: 'Suggested Instance Type', key: 'suggested' },
                        { display: true, name: 'Resource Id', key: 'resourceId', isRowSelection: true },
                        { display: true, name: 'Usage Date', key: 'usageDate', },
                        { display: true, name: 'Current Cost', key: 'costMtm', },
                        { display: true, name: 'variance', key: 'variance', },
                    ],
                },
            ]
        }
    ];
}

function getAddEditAzureStackRatePackCardModal() {
    return [
        {
            "actionAPIKey": "addEditAzureStackRatePackAPI",
            "leafs": [
                {
                    "id": 21, "leafTitle": "Name", "type": "text-input", "inputType": "string",
                    "defSelectKey": "packName", "helperText": "Name of the Rate pack", "metrics": {},
                    "validation": { "isRequired": true, "message": "At-least one tenant should be selected" }
                }, {
                    "id": 22,
                    "leafTitle": "Enable Pack Level Rates",
                    "type": "group-radio", "defSelectKey": "packLevelRate",
                    "size": 3, "apiKey": "cspRatePackTypeListAPI",
                    "helperText": "Choose between Pack level rates vs line item rates"
                },
                {
                    "id": 23, "leafTitle": "Rate", "type": "text-input", "inputType": "string",
                    "defSelectKey": "rate", "size": 3, "helperText": "Please enter pack level rates"
                },
                {
                    "id": 24, "leafTitle": "Pack Items", "size": 12,
                    "type": "nested-multi-dropdown-field-with-input",
                    "apiKey": "azureStackPackRateDetailsAPI",
                    "defSelectKey": "cspPackRateDetails",
                    "componentList":
                        [{
                            "id": "d1", "title": "Name", "size": 2,
                            "type": "select", "apiKey": "listAzureStackMeterAndNameListAPI",
                            "defSelectKey": "meterId", "helperText": "Please select Name", "metrics": {}
                        },
                        {
                            "id": "d2", "title": "Unit", "type": "select", "size": 2,
                            "apiKey": "listAzureStackUnitAPI", "selectDefaultValue": true, "defSelectKey": "unit",
                            "helperText": "", "metrics": {}, "bindLeafData": [{ "bindWith": "meterId", "id": "d1" }]
                        },
                        { "id": "v1", "type": "input", "size": 1, "subType": "switch", "label": "Primary" },
                        { "id": "v3", "type": "input", "size": 2, "subType": "number", "label": "Rate" },
                        { "id": "v2", "type": "input", "size": 2, "subType": "number", "label": "Quantity" }], "metrics": {}
                }]
        }];
}

function getEditCloudAccountsData() {
    return [
        {
            actionAPIKey: 'addEditEnvironmentAPI',
            leafs: [
                {
                    "id": 9,
                    "leafTitle": "Cloud Services",
                    "type": "multi-checkbox",
                    "defSelectKey": "instanceId",
                    "helperText": "Please select Add-on services",
                    labelSize: 12,
                    size: 12,

                    "apiKey": "listCloudServicesAPI",
                    "metrics": {},
                    validation: {
                        isRequired: true,
                        type: 'checkbox',
                        // showAlert: true,
                    }
                },
                {
                    id: 10,
                    type: 'image',
                    icon: "azure",
                    label: "Azure",
                    width: 28,
                    groupId: 'accounts',

                    "bindLeafData": [{
                        "showWhen": "azure",
                        "bindWith": "instanceId",
                        "id": 9
                    },]
                }, {
                    id: 13,
                    leafTitle: "Accounts",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "acct",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accounts',
                    apiKey: "providerSubscriptionId",
                    "bindLeafData": [{
                        "showWhen": "azure",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                    metrics: {},
                    validation: {
                        isRequired: true,
                        message: "Please select any value for accounts",
                        type: 'text'
                    }
                },
                {
                    id: 6,
                    leafTitle: "Stack Accounts",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "stkAcc",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accounts',
                    apiKey: "providerSubscriptionId",
                    metrics: {},
                    "bindLeafData": [{
                        "showWhen": "azure",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                },
                {
                    id: 6,
                    leafTitle: "CSP Customers",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "cspCst",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accounts',
                    apiKey: "providerSubscriptionId",
                    metrics: {},
                    "bindLeafData": [{
                        "showWhen": "azure",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                },
                {
                    id: 6,
                    leafTitle: "Stack Subscriptions",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "stkSb",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accounts',
                    apiKey: "providerSubscriptionId",
                    metrics: {},
                    "bindLeafData": [{
                        "showWhen": "azure",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                },
                {
                    id: 10,
                    type: 'image',
                    icon: "aws",

                    groupId: 'accAzure',
                    "bindLeafData": [{
                        "showWhen": "aws",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                },
                {
                    id: 6,
                    leafTitle: "Accounts",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "acct1",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accAzure',
                    apiKey: "providerSubscriptionId",
                    metrics: {},
                    "bindLeafData": [{
                        "showWhen": "aws",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                },
                {
                    id: 6,
                    leafTitle: "Stack Accounts",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "stkacc1",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accAzure',
                    apiKey: "providerSubscriptionId",
                    metrics: {},
                    "bindLeafData": [{
                        "showWhen": "aws",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                },
                {
                    id: 6,
                    leafTitle: "CSP Customers",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "cspcst1",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accAzure',
                    apiKey: "providerSubscriptionId",
                    metrics: {},
                    "bindLeafData": [{
                        "showWhen": "aws",
                        "bindWith": "instanceId",
                        "id": 9
                    }],
                },
                {
                    id: 6,
                    leafTitle: "Stack Subscriptions",
                    "isHawkUI": true,
                    type: "select",
                    mode: "multiple",
                    defSelectKey: "stksub1",
                    helperText: "Please Select Project",
                    labelSize: 4,
                    size: 8,

                    groupId: 'accAzure',
                    "bindLeafData": [{
                        "hideWhen": "azure",
                        "bindWith": "authType",
                        "id": 9
                    }]
                }
            ]
        }
    ]
}

function envSelectionComponentData() {
    return [
        {
            actionAPIKey: 'saveEnvDetailsAPI',
            leafs: [
                {
                    "id": 1,
                    "leafTitle": "AWS",
                    "type": "group-radio",
                    "defSelectKey": "awsEnvType",
                    "size": 12,
                    "apiKey": "listEnvTypeAPI",
                    "metrics": {},
                },
                {
                    "id": 22,
                    "leafTitle": "Azure",
                    "type": "group-radio",
                    "defSelectKey": "azureEnvType",
                    "size": 12,
                    "apiKey": "listMonitoringTypeAPI",
                    "metrics": {},
                },
                {
                    "id": 3,
                    "leafTitle": "Add-on services",
                    "type": "multi-checkbox",
                    "defSelectKey": "instanceId",
                    "helperText": "Please select Add-on services",
                    "size": 12,
                    "apiKey": "listElbInstanceAPI",
                    "metrics": {},
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
    let data = [];

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
    setResponseHeaders(res);
    res.send(data);
});


app.post('/data/2', function (req, res) {
    let data = [];

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
    setResponseHeaders(res);
    res.send(data);
});


//Mock API for the Linear chart Visualization components.
app.post('/data/3', function (req, res) {
    let data = [];

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
                    { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { text: '10-20', CPU: 50, Network: 20, Disk: 20 },
                    { text: '20-30', CPU: 60, Network: 58, Disk: 23 },
                    { text: '30-40', CPU: 75, Network: 65, Disk: 46 },
                    { text: '40-50', CPU: 25, Network: 30, Disk: 65 },
                    { text: '50-60', CPU: 65, Network: 120, Disk: 40 },
                    { text: '70-80', CPU: 35, Network: 53, Disk: 30 },
                    { text: '80-90', CPU: 45, Network: 80, Disk: 12 },
                    { text: '90+', CPU: 90, Network: 09, Disk: 78 },
                ],
                viz3: [
                    { text: 'Mon', CPU: 15, Memory: 80 },
                    { text: 'Tue', CPU: 100, Memory: 89 },
                    { text: 'Wed', CPU: 10, Memory: 30 },
                    { text: 'Thu', CPU: 50, Memory: 36 },
                    { text: 'Fri', CPU: 85, Memory: 65 },
                    { text: 'Sat', CPU: 34, Memory: 40 },
                    { text: 'Sun', CPU: 35, Memory: 12 },
                ],
                viz4: [
                    { text: 't2.small', value: 40 },
                    { text: 't3.medium', value: 30 },
                    { text: 't1.large', value: 30 },
                    { text: 'm2.nano', value: 20 },
                    { text: 't2.large', value: 27 },
                    { text: 't3.medium', value: 25 }],
                viz5: [
                    { text: 'Running', value: 60 },
                    { text: 'Stopped', value: 40 },
                    { text: 'Idle', value: 40 },],
                viz6: [
                    { text: 'On-Demand', value: 10 },
                    { text: 'Spot', value: 20 },
                    { text: 'Reserved', value: 70 },],
            },];
            break;
        case "Last Week":
            data = [{
                viz1: [
                    { text: 'Aug 1', "Optimal Cost": 45, "Real Cost": 27, },
                    { text: 'Aug 2', "Optimal Cost": 35, "Real Cost": 17, },
                    { text: 'Aug 3', "Optimal Cost": 25, "Real Cost": 97, },
                    { text: 'Aug 4', "Optimal Cost": 25, "Real Cost": 37, },
                    { text: 'Aug 5', "Optimal Cost": 15, "Real Cost": 47, },
                ],
                viz2: [
                    { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { text: '10-20', CPU: 50, Network: 20, Disk: 20 },
                    { text: '20-30', CPU: 120, Network: 58, Disk: 50 },
                    { text: '30-40', CPU: 75, Network: 20, Disk: 46 },
                    { text: '40-50', CPU: 25, Network: 58, Disk: 65 },
                    { text: '50-60', CPU: 20, Network: 120, Disk: 40 },
                    { text: '70-80', CPU: 35, Network: 53, Disk: 30 },
                    { text: '80-90', CPU: 45, Network: 80, Disk: 50 },
                    { text: '90+', CPU: 10, Network: 20, Disk: 15 },
                ],
                viz3: [
                    { text: 'Mon', CPU: 15, Memory: 15 },
                    { text: 'Tue', CPU: 50, Memory: 20 },
                    { text: 'Wed', CPU: 10, Memory: 30 },
                    { text: 'Thu', CPU: 15, Memory: 36 },
                    { text: 'Fri', CPU: 85, Memory: 65 },
                    { text: 'Sat', CPU: 20, Memory: 40 },
                    { text: 'Sun', CPU: 35, Memory: 100 },
                ], viz4: [
                    { text: 't2.small', value: 40 },
                    { text: 't3.medium', value: 30 },
                    { text: 't1.large', value: 30 },
                    { text: 'm2.nano', value: 20 },
                    { text: 't2.large', value: 27 },
                    { text: 't3.medium', value: 25 }],
                viz5: [
                    { text: 'Running', value: 10 },
                    { text: 'Stopped', value: 40 },
                    { text: 'Idle', value: 50 },],
                viz6: [
                    { text: 'On-Demand', value: 70 },
                    { text: 'Spot', value: 20 },
                    { text: 'Reserved', value: 10 },],
            }];
            break;
        case "This Week":
            data = [{
                viz1: [
                    { text: 'July 23', "Optimal Cost": 455, "Real Cost": 247, },
                    { text: 'July 24', "Optimal Cost": 355, "Real Cost": 147, },
                    { text: 'July 25', "Optimal Cost": 855, "Real Cost": 947, },
                    { text: 'July 26', "Optimal Cost": 255, "Real Cost": 347, },
                    { text: 'July 27', "Optimal Cost": 455, "Real Cost": 647, },
                    { text: 'July 28', "Optimal Cost": 155, "Real Cost": 447, "Predictable Cost": 447, },
                    { text: 'July 29', "Predictable Cost": 547, },
                    { text: 'July 30', "Predictable Cost": 400, },
                ],
                viz2: [
                    { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { text: '10-20', CPU: 50, Network: 80, Disk: 10 },
                    { text: '20-30', CPU: 120, Network: 80, Disk: 50 },
                    { text: '30-40', CPU: 75, Network: 20, Disk: 46 },
                    { text: '40-50', CPU: 60, Network: 50, Disk: 10 },
                    { text: '50-60', CPU: 80, Network: 120, Disk: 40 },
                    { text: '70-80', CPU: 35, Network: 53, Disk: 30 },
                    { text: '80-90', CPU: 45, Network: 80, Disk: 50 },
                    { text: '90+', CPU: 60, Network: 20, Disk: 15 },
                ],
                viz3: [
                    { text: 'Mon', CPU: 15, Memory: 15 },
                    { text: 'Tue', CPU: 50, Memory: 50 },
                    { text: 'Wed', CPU: 10, Memory: 30 },
                    { text: 'Thu', CPU: 30, Memory: 70 },
                    { text: 'Fri', CPU: 85, Memory: 65 },
                    { text: 'Sat', CPU: 20, Memory: 90 },
                    { text: 'Sun', CPU: 50, Memory: 100 },
                ],
                viz4: [
                    { text: 't2.small', value: 40 },
                    { text: 't3.medium', value: 30 },
                    { text: 't1.large', value: 30 },
                    { text: 'm2.nano', value: 20 },
                    { text: 't2.large', value: 27 },
                    { text: 't3.medium', value: 25 }],
                viz5: [
                    { text: 'Running', value: 10 },
                    { text: 'Stopped', value: 80 },
                    { text: 'Idle', value: 10 },],
                viz6: [
                    { text: 'On-Demand', value: 50 },
                    { text: 'Spot', value: 30 },
                    { text: 'Reserved', value: 20 },],
            }];
            break;
        default:
            data = [{
                viz1: [
                    { text: 'June 1', "Optimal Cost": 40, "Real Cost": 20, },
                    { text: 'June 2', "Optimal Cost": 30, "Real Cost": 18, },
                    { text: 'June 3', "Optimal Cost": 20, "Real Cost": 90, },
                    { text: 'June 4', "Optimal Cost": 27, "Real Cost": 38, },
                    { text: 'June 5', "Optimal Cost": 18, "Real Cost": 40, },
                ],
                viz2: [
                    { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
                    { text: '10-20', CPU: 50, Network: 20, Disk: 20 },
                    { text: '20-30', CPU: 120, Network: 58, Disk: 80 },
                    { text: '30-40', CPU: 55, Network: 30, Disk: 46 },
                    { text: '40-50', CPU: 25, Network: 88, Disk: 65 },
                    { text: '50-60', CPU: 50, Network: 120, Disk: 40 },
                    { text: '70-80', CPU: 35, Network: 53, Disk: 10 },
                    { text: '80-90', CPU: 35, Network: 80, Disk: 50 },
                    { text: '90+', CPU: 10, Network: 80, Disk: 15 },
                ],
                viz3: [
                    { text: 'Mon', CPU: 95, Memory: 15 },
                    { text: 'Tue', CPU: 70, Memory: 20 },
                    { text: 'Wed', CPU: 40, Memory: 30 },
                    { text: 'Thu', CPU: 55, Memory: 46 },
                    { text: 'Fri', CPU: 85, Memory: 15 },
                    { text: 'Sat', CPU: 20, Memory: 40 },
                    { text: 'Sun', CPU: 25, Memory: 100 },
                ],
                viz4: [
                    { text: 't2.small', value: 40 },
                    { text: 't3.medium', value: 30 },
                    { text: 't1.large', value: 30 },
                    { text: 'm2.nano', value: 20 },
                    { text: 't2.large', value: 27 },
                    { text: 't3.medium', value: 25 }],
                viz5: [
                    { text: 'Running', value: 40 },
                    { text: 'Stopped', value: 10 },
                    { text: 'Idle', value: 60 },],
                viz6: [
                    { text: 'On-Demand', value: 30 },
                    { text: 'Spot', value: 60 },
                    { text: 'Reserved', value: 10 },],
            }];
    }
    setResponseHeaders(res);
    res.send(data);
});

app.post('/api/perspective', function (req, res) {

    //Add some delay on purpose.
    addDelay();

    let data = [
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

    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });

});

app.post('/api/summary', function (req, res) {

    //Add some delay on purpose.
    addDelay();

    let data = [
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

    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });

});

app.post('/api/metrics', function (req, res) {

    //Add some delay on purpose.
    addDelay();

    let data = [
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

        {
            "date": "2018-07-10 08:00:00.0",
            "Real Cost": 0.530,
            "Optimal Cost": 0.0792,
            "Misc Cost": 0.152,
        },
        {
            "date": "2018-07-11 08:00:00.0",
            "Real Cost": 0.430,
            "Optimal Cost": 0.3192,
            "Misc Cost": 0.422,
        },
        {
            "date": "2018-07-12 08:00:00.0",
            "Real Cost": 0.130,
            "Optimal Cost": 0.1292,
            "Misc Cost": 0.122,
        },
    ];

    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});



app.post('/api/metricdistributionbyutil', function (req, res) {
    //Add some delay on purpose.

    addDelay();

    let data = [];
    //Default will be fetched alwasy as My mock API has some parsing issue.
    switch (req.query.tempFilter) {
        case "Last 30 Days":
            data = [
                { text: '0-10', TPU: 85, Hub: 54, HDD: 100 },
                { text: '10-20', TPU: 20, Hub: 20, HDD: 20 },
                { text: '20-30', TPU: 70, Hub: 88, HDD: 23 },
                { text: '30-40', TPU: 75, Hub: 55, HDD: 46 },
                { text: '40-50', TPU: 55, Hub: 30, HDD: 65 },
                { text: '50-60', TPU: 65, Hub: 120, HDD: 40 },
                { text: '70-80', TPU: 65, Hub: 53, HDD: 30 },
                { text: '80-90', TPU: 45, Hub: 90, HDD: 12 },
                { text: '90+', TPU: 10, Hub: 09, HDD: 78 },
            ];;
            break;
        case "2":
            data = [
                { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { text: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { text: '20-30', CPU: 60, Network: 58, Disk: 23 },
                { text: '30-40', CPU: 75, Network: 65, Disk: 46 },
                { text: '40-50', CPU: 25, Network: 30, Disk: 65 },
                { text: '50-60', CPU: 65, Network: 120, Disk: 40 },
                { text: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { text: '80-90', CPU: 45, Network: 80, Disk: 12 },
                { text: '90+', CPU: 90, Network: 09, Disk: 78 },
            ];
            break;
        case "3":
            data = [
                { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { text: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { text: '20-30', CPU: 60, Network: 58, Disk: 23 },
                { text: '30-40', CPU: 75, Network: 65, Disk: 46 },
                { text: '40-50', CPU: 25, Network: 30, Disk: 65 },
                { text: '50-60', CPU: 65, Network: 120, Disk: 40 },
                { text: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { text: '80-90', CPU: 45, Network: 80, Disk: 12 },
                { text: '90+', CPU: 90, Network: 09, Disk: 78 },
            ];
            break;
        default:
            data = [
                { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
                { text: '10-20', CPU: 50, Network: 20, Disk: 20 },
                { text: '20-30', CPU: 60, Network: 58, Disk: 23 },
                { text: '30-40', CPU: 75, Network: 65, Disk: 46 },
                { text: '40-50', CPU: 25, Network: 30, Disk: 65 },
                { text: '50-60', CPU: 65, Network: 120, Disk: 40 },
                { text: '70-80', CPU: 35, Network: 53, Disk: 30 },
                { text: '80-90', CPU: 45, Network: 80, Disk: 12 },
                { text: '90+', CPU: 90, Network: 09, Disk: 78 },
            ];
    }
    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});


app.post('/api/metricdistributionbyday', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    let data = [
        { text: 'Mon', Util: 50, Cloud: 20, CPU: 15, Memory: 80 },
        { text: 'Tue', Util: 50, Cloud: 20, CPU: 100, Memory: 89 },
        { text: 'Wed', Util: 50, Cloud: 20, CPU: 10, Memory: 30 },
        { text: 'Thu', Util: 50, Cloud: 20, CPU: 50, Memory: 36 },
        { text: 'Fri', Util: 50, Cloud: 20, CPU: 85, Memory: 65 },
        { text: 'Sat', Util: 50, Cloud: 20, CPU: 34, Memory: 40 },
        { text: 'Sun', Util: 50, Cloud: 20, CPU: 35, Memory: 12 },
    ];
    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/distribution', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    switch (req.body.metrics) {
        case "INSTANCE_TYPE":
            data = [
                { text: 't2.small', value: 40 },
                { text: 't3.medium', value: 30 },
                { text: 't1.large', value: 30 },
                { text: 'm2.nano', value: 20 },
                { text: 't2.large', value: 27 },
                { text: 't3.medium', value: 25 }];
            break;
        case "INSTANCE_STATE":
            data = [
                { text: 'Running', value: 10 },
                { text: 'Stopped', value: 40 },
                { text: 'Idle', value: 50 },];
            break;
        case "DEPLOYMENT_TYPE":
            data = [
                { text: 'On-Demand', value: 50 },
                { text: 'Spot', value: 30 },
                { text: 'Reserved', value: 20 },]
            break;
        default:
            data = [
                { text: 't2.small', value: 40 },
                { text: 't3.medium', value: 30 },
                { text: 't1.large', value: 30 },
                { text: 'm2.nano', value: 20 },
                { text: 't2.large', value: 27 },
                { text: 't3.medium', value: 25 }];
    }

    setResponseHeaders(res);
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
    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});


app.post('/api/fetchgroups', function (req, res) {

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
    setResponseHeaders(res);
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
            'currency': '₹',
            "instanceId": 'i-783459',
            "action": '',
            "alertType": "success",
            "isSelectedDefault": true,
            "noance": true,
            "scheduled": 'will be scheduled in few days',
            "comments": 'Need manual intervention',
            "review": 'Lorem Ipsum is simply dummy text',
            "liability": 'Not accepted',
            "scheduled": 'will be scheduled in few days',
            "isSelectedDefault": true,
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
            "comments": 'Fully automated and reliadble',
            "review": "There are many variations",
            "liability": 'Accepted',
            "costMtm": 33232935.91,
            'currency': '$',
            "noance": false,
            "scheduled": 'will be scheduled in an minute',
            "action": '',
        },
        {
            "resourceId": "res-231432",
            "alertType": "warning",
            "current": "r66.medium",
            "suggested": "re3.medium",
            "comments": 'Yes, python 2XX is dead',
            "liability": 'partially declined',
            "instanceId": 'y-fsdgff31824280',
            "usageDate": "2014-09-30",
            "costDailyAverage": 4321.197,
            "costCurrent": 43243.43,
            "review": "discovered source. Lorem Ipsum",
            "costMtm": 424.43,
            'currency': '£',
            "noance": true,
            "scheduled": 'will be scheduled in an hour',
            "action": '',
            "isSelectedDefault": true,
        }
    ];
    setResponseHeaders(res);
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
    setResponseHeaders(res);
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

    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});

app.post('/api/instance/schedule', function (req, res) {
    //Add some delay on purpose.

    addDelay();
    let data = {
        gridData: [],
        default: {}
    };

    if (req.query.resourceid) {
        data = {
            gridData: [
                {
                    "day": "MON",
                    "schedule": [
                        {
                            "hour": "00:00",
                            "status": Math.random() > 0.40,
                            "data": {
                                v1: "10",
                                v2: "20",
                                v3: "25",
                            }
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
                            "status": Math.random() > 0.40,
                            "data": {
                                v1: "10",
                                v1: "20",
                                v1: "25",
                            }
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
            ],
            defaultConfig: {
                v1: 12,
                v2: 10,
                v3: 9,
            }
        };
    }

    setResponseHeaders(res);
    res.send(data);
    //res.status(500).send({ error: "Internal Server Error" });
});


app.post('/api/instance/saveschedule', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send({ success: "Schedule saved succesfully" });
});

app.post('/api/list/instancesbygroup', function (req, res) {
    //Add some delay on purpose.
    addDelay();
    const data = [
        {
            "groupId": 148,
            "displayName": `${req.body.type}-t2.micro`,
            "resourceId": [
                {
                    name: 't2.micro-0e40f9481bf0b7988',
                    key: 'i-0e40f9481bf0b7988',
                },
                {
                    name: 't2.micro-yr78yr58454',
                    key: 'i-yr78yr58454',
                },
                {
                    name: 't2.micro-3745824',
                    key: 'i-3745824',
                },
            ]
        },
        {
            "groupId": 149,
            "displayName": `${req.body.type}-ap-south-1`,
            "resourceId": [
                {
                    name: 'ap-south-1-0e40f9481bf0b7988',
                    key: 'i-0e40f9481bf0b7988',
                },
                {
                    name: 'ap-south-1-yr78yr58454',
                    key: 'i-yr78yr58454',
                },
                {
                    name: 'ap-south-1-3745824',
                    key: 'i-3745824',
                },
            ]
        },
        {
            "groupId": 150,
            "displayName": `${req.body.type}-ap-west-1`,
            "resourceId": [
                {
                    name: 'ap-south-1a-0e40f9481bf0b7988',
                    key: 'i-0e40f9481bf0b7988',
                },
                {
                    name: 'ap-south-1a-yr78yr58454',
                    key: 'i-yr78yr58454',
                },
                {
                    name: 'ap-south-1a-3745824',
                    key: 'i-3745824',
                },
            ]
        }
    ];

    setResponseHeaders(res);
    res.status(200).send(data);
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
            'authToken': 'eye.RefresheyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            'tokenExpiration': Math.floor(Date.now() / 1000) + 6000,
            'refreshToken': 'this-is-local-refresh-token',
            'userId': '999',
            'firstName': 'Harry',
            'lastName': 'Smith',
            'accountNumber': '89861328498',
            'email': 'business.user.213@gmail.com',
            'accountType': 'PRO',
            "roles": "ROOT_ADMIN",
            "environmentSelection": false,
            "envList": ['1', '2'],
        };
        responseStatus = 200;
    }

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(responseStatus).send(data);
});

app.post('/api/auth/logout', function (req, res) {
    let data = {};

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/registration/completeregistration', function (req, res) {
    let data = { "status": "success" };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/registration/checkemailexists', function (req, res) {
    let data = "false";
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/auth/resetpassword', function (req, res) {
    let data = "success";
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/csp/customer/ratecard/deletecspratecardline', function (req, res) {
    const data = {
        key: 'UPDATE_PREF',
        variant: 'success',
        message: 'Rate Card deleted succesfully',
    };
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/containers/byreservationandutilization', function (req, res) {


    let data = []
    if (req.body.metrics[0] === 'MEMORY_UTILIZATION') {
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        addDelay();
        data = [
            { text: '0-10', CPU: 75, Network: 54, Disk: 100 },
            { text: '10-20', CPU: 50, Network: 20, Disk: 20 },
            { text: '20-30', CPU: 120, Network: 58, Disk: 50 },
            { text: '30-40', CPU: 75, Network: 20, Disk: 46 },
            { text: '40-50', CPU: 25, Network: 58, Disk: 65 },
            { text: '50-60', CPU: 20, Network: 120, Disk: 40 },
            { text: '70-80', CPU: 35, Network: 53, Disk: 30 },
            { text: '80-90', CPU: 45, Network: 80, Disk: 50 },
            { text: '90+', CPU: 10, Network: 20, Disk: 15 },
        ];
    }
    if (req.body.metrics[0] === 'CPU_UTILIZATION') {
        data = [
            { text: '0-10', GPU: 75, Network: 54, },
            { text: '10-20', GPU: 50, Network: 20, },
            { text: '20-30', GPU: 120, Network: 58 },
            { text: '30-40', GPU: 75, Network: 20, },
            { text: '40-50', GPU: 25, Network: 58, },
            { text: '50-60', GPU: 20, Network: 120, },
            { text: '70-80', GPU: 35, Network: 53, },
            { text: '80-90', GPU: 45, Network: 80, },
            { text: '90+', GPU: 10, Network: 20, },
        ];
    }
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/containers/aggregatedcost', function (req, res) {
    addDelay();

    let data =
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
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/containers/task/distrubution', function (req, res) {
    addDelay();

    let data = [
        { name: 'running', value: 2 },
        { name: 'active', value: 5 },
        { name: 'stopped', value: 4 }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/flem/service/status', function (req, res) {
    addDelay();

    let data = [
        { name: 'running', value: 4 },
        { name: 'active', value: 1 },
        { name: 'stopped', value: 1 }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/containers/task/distribution', function (req, res) {
    addDelay();

    let data = [
        { name: 'ECS', value: 6 },
        { name: 'Azure', value: 8 },
        { name: 'GCP', value: 6 },
        { name: 'Kafka', value: 2 },
        { name: 'Pub-Sub', value: 8 },
        { name: 'SQL mockit', value: 4 },
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/containers/service/distribution', function (req, res) {
    addDelay();

    let data = [
        { name: 'Kafka', value: 4 },
        { name: 'Azure', value: 1 },
        { name: 'SQL mockit', value: 9 },
        { name: 'ECS', value: 2 },
        { name: 'GCP', value: 2 },
        { name: 'Pub-Sub', value: 4 },

    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error for multi-cloud" });
    res.status(200).send(data);
});

app.post('/api/containers/costbytype', function (req, res) {
    addDelay();

    let data = [
        { name: 'ECS', value: 40, unit: '#' },
        { name: 'EKS', value: 30, unit: '$' },
        { name: 'FARGATE', value: 30, unit: '$' }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/containers/clusteraggregates', function (req, res) {
    addDelay();

    let data = [
        {
            clustername: "abc",
            configmetric: "abc",
            performancemetric: "abc",
            billingcost: 1234
        }
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/containers/serviceaggregates', function (req, res) {
    addDelay();

    let data = [
        {
            service: "abc",
            configmetric: "abc",
            performancemetric: "abc",
            billingcost: "12341"
        }
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/containers/taskaggregates', function (req, res) {
    addDelay();

    let data = [
        {
            task: "abc",
            config: "abc"
        }
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/flemingo/summary', function (req, res) {
    addDelay();

    let data =
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

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error for summary graph, Regional data can't be displayed" });
    res.status(200).send(data);
});

app.post('/api/flemingo/costs', function (req, res) {
    addDelay();

    let data =
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

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error to test summary component" });
    res.status(200).send(data);
});


app.post('/api/flemingo/accomodations', function (req, res) {
    addDelay();

    let data = [
        {
            "seriesName": "service1",
            "reservation": 100,
            "utilization": 80
        },
        {
            "seriesName": "service2",
            "reservation": 300,
            "utilization": 70
        },
        {
            "seriesName": "service3",
            "reservation": 500,
            "utilization": 30
        },
        {
            "seriesName": "service4",
            "reservation": 240,
            "utilization": 50
        },
        {
            "seriesName": "service5",
            "reservation": 400,
            "utilization": 70
        }
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});




app.post('/api/flemingo/awsSpending', function (req, res) {
    addDelay();

    let data = [
        {
            "seriesName": "basic1",
            "reservation": 10,
            "utilization": 40,
            "spot": 70,

        },
        {
            "seriesName": "basic2",
            "reservation": 300,
            "utilization": 70,
            "spot": 120,
        },
        {
            "seriesName": "basic3",
            "reservation": 300,
            "utilization": 70,
            "spot": 80,
        },
        {
            "seriesName": "basic4",
            "reservation": 240,
            "utilization": 50,
            "spot": 120,
        },
        {
            "seriesName": "basic5",
            "reservation": 100,
            "utilization": 70,
            "spot": 10,
        },
        {
            "seriesName": "basic6",
            "reservation": 200,
            "utilization": 40,
            "spot": 120,
        }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/instances/aggregatehistogrammetrics3', function (req, res) {
    addDelay();

    let data = [
        {
            "seriesName": "service1",
            "reservation": 100,
            "utilization": 80,
            "spot": 120,
            'unit': '$',
        },
        {
            "seriesName": "service2",
            "reservation": 300,
            "utilization": 70,
            "spot": 120,
        },
        {
            "seriesName": "service3",
            "reservation": 500,
            "utilization": 30,
            "spot": 120,
        },
        {
            "seriesName": "service4",
            "reservation": 240,
            "utilization": 50,
            "spot": 120,
        },
        {
            "seriesName": "service5",
            "reservation": 400,
            "utilization": 70,
            "spot": 120,
        },
        {
            "seriesName": "service5",
            "reservation": 200,
            "utilization": 40,
            "spot": 120,
        }
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/instances/getaggregatemetriccountbyday', function (req, res) {
    addDelay();

    let data = [
        {
            "seriesName": "service1",
            "reservation": 100,
            "utilization": 80,
            'unit': '$',
        },
        {
            "seriesName": "service2",
            "reservation": 300,
            "utilization": 70
        },
        {
            "seriesName": "service3",
            "reservation": 500,
            "utilization": 30
        },
        {
            "seriesName": "service4",
            "reservation": 240,
            "utilization": 50
        },
        {
            "seriesName": "service5",
            "reservation": 200,
            "utilization": 40
        }
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});



app.post('/api/cloud/byconsume', function (req, res) {
    addDelay();
    let data = [
        { id: 1, name: 't2.small', age: 24, location: 'Lagos', level: 'stage-1', },
        { id: 2, name: 'Bamidele Johnson', age: 18, location: 'Anambra', level: 'stage-4', },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/scenario', function (req, res) {


    let data = [];

    console.log('scenario: ', req.query.name);

    switch (req.query.name) {
        /* New pages config from here  */
        case "users":
            data = users;
            break;
        case "cspOverview":
        case "RateCards":
            data = cspOverview;
            break;
        case "cspBilling":
            data = cspBilling;
            break;
        case "profile":
            data = cspCustomerProfile;
            break;
        case "environments":
            data = getEnvironmentsUIData();
            break;
        case "aquilaServices":
            data = getServicesUIData();
            break;
        case "userRoles":
            data = getRolesUIData();
            break;
        case "adminSettings":
            data = adminSettings;
            break;
        case "rateLine":
            data = rateLine;
            break;
        case "ratePack":
            data = ratePack;
            break;
        case "managePack":
            data = managePack;
            break;
        case "govOverview":
            data = govOverview;
            break;
        case "finDomain":
            data = finDomain;
            break;
        case "newFinDomain":
            data = newFinDomain;
            break;

        /* Old pages config from here  */

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
                            apiKey: 'awsYearlySpendingAPI',
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
                                { display: true, name: 'S/N' },
                                { display: true, name: 'Name', },
                                { display: true, name: 'Age', },
                                { display: true, name: 'Location', },
                                { display: true, name: 'Level', },
                                { display: true, name: 'mood', },
                                { display: true, name: 'Status', type: 'progress' },
                                { display: true, name: 'Action', type: 'drill-down', onColumnIndex: [1, 2, 3], drillTo: 'detail' }
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
                            type: 'bar', isPro: true,
                            apiKey: 'distByDayAPI',
                            size: 3,
                            metrics: 'MGMT_RS',
                        },
                        {
                            id: 14, leafTitle: 'Top 10 Services by CPU',
                            type: 'bar', isPro: true,
                            apiKey: 'awsSpendingFlemingoAPI',
                            size: 3,
                            metrics: 'SOLID_STATE_RS',
                        },
                        {
                            id: 15, leafTitle: 'Top 10 Services by Network',
                            type: 'bar', isPro: true,
                            apiKey: 'accomodationsyFlemingoAPI',
                            size: 6,
                            metrics: 'SERVICE_RS',
                        }
                    ]
                }
            ];
        case "New Group":
            data = getGroupUIData();
            break;

        case "ActionDashboard":
            data = getAdministrationDashboard();
            break;
        case "Edit Customer":
            data = EditCustomerScreenData();
            break;

        default:
            data = componentsData();
    }

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/scenario/modal', function (req, res) {
    addDelay();
    let data = [];
    console.log('Modal:', req.query.name);
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
                            apiKey: 'listAWSInstanceTypeAPI',
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
                            "bindLeafData": [{ "hideWhen": "pool", "bindWith": "elbMonitoringType", "id": 1, }],
                        },
                        {
                            "id": 3,
                            "leafTitle": "Image Id",
                            "type": "select",
                            "size": 12,
                            "apiKey": "listAWSInstanceTypeAPI",
                            "defSelectKey": "selectedImage",
                            "helperText": "Choose Image Id",
                            "metrics": {},
                            "bindLeafData": [{ "hideWhen": "no-pool", "bindWith": "elbMonitoringType", "id": 1 }],
                        },
                        {
                            "id": 32,
                            "leafTitle": "Region",
                            "type": "select",
                            "size": 6,
                            "apiKey": "listRegionAPI",
                            "defSelectKey": "regionSel",
                            "helperText": "Please select region location",
                        },
                        {
                            "id": 477,
                            "leafTitle": "Cluster",
                            "type": "select",
                            "size": 6,
                            "apiKey": "listClusterAPI",
                            "defSelectKey": "clusterSel",
                            "helperText": "Please select Cluster",
                            "metrics": {
                                "types": [
                                    "*"
                                ]
                            },
                            "bindLeafData": [{ "bindWith": "regionSel", "id": 32, }],
                        },
                        {
                            "id": 2232,
                            "leafTitle": "Pods",
                            "type": "multi-checkbox",
                            "defSelectKey": "pods",
                            "helperText": "Please select Pods",
                            "size": 12,
                            "apiKey": "listElbInstanceAPI",
                            "metrics": {
                                "types": [
                                    "*"
                                ]
                            },
                            "bindLeafData": [{ "bindWith": "clusterSel", "id": 477, }],
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
                                    type: "number",
                                    validation: {
                                        type: 'amount'
                                    },
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
                    actionAPIKey: 'addEditEnvironmentAPI',
                    dataAPIKey: 'listResourceOrderListAPI',
                    actionButtonText: 'Add',
                    modalWidth: 500,
                    modalActions: [
                        {
                            id: 'help',
                            type: 'help',
                            url: "http://google.com",
                            target: "new",
                        }
                    ],
                    leafs: [
                        {
                            id: 10,
                            type: 'image',
                            icon: "okta",
                            width: 80,
                            position: 'right'
                        },
                        {
                            id: 1,
                            leafTitle: "User Information",
                            leafSubTitle: "Active",
                            type: "toggle",
                            defSelectKey: "envState",
                            labelSize: 5,
                            size: 7,
                        },
                        {
                            id: 2,
                            leafTitle: "User Role",
                            type: "select",
                            defSelectKey: "projects",
                            mode: "multiple",
                            labelSize: 3,
                            size: 9,
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                        },
                        {
                            id: 3,
                            leafTitle: "User ID",
                            type: "text-input",
                            defSelectKey: 'user-id',
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                        },
                        {
                            id: 4,
                            leafTitle: "First Name",
                            type: "text-input",
                            defSelectKey: 'first-name',
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                        },
                        {
                            id: 5,
                            leafTitle: "Last Name",
                            type: "text-input",
                            defSelectKey: 'last-name',
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                        },
                        {
                            id: 6,
                            leafTitle: "Phone",
                            type: "text-input",
                            defSelectKey: 'phone',
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                        },
                        {
                            id: 7,
                            leafTitle: "Mobile",
                            type: "text-input",
                            defSelectKey: 'mobile',
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                        },
                        {
                            id: 8,
                            leafTitle: "Email",
                            type: "text-input",
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                            defSelectKey: 'email',
                            metrics: '{ "email" : "user_email"}',
                            validation: {
                                isRequired: true,
                                message: 'Please enter correct email address',
                                type: 'email'
                            },
                        },
                        {
                            "id": 12,
                            "leafTitle": "Authentication",
                            "type": "group-radio",
                            "defSelectKey": "authType",
                            labelSize: 3,
                            size: 9,
                            "apiKey": "listAuthTypeAPI",
                            "metrics": {},
                            validation: {
                                isRequired: true,
                                type: 'checkbox',
                                // showAlert: true,
                            }
                        },
                        {
                            id: 10,
                            leafTitle: "Username",
                            type: "text-input",
                            defSelectKey: 'username',
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                            "bindLeafData": [{
                                "hideWhen": "okta",
                                "bindWith": "authType",
                                "id": 9
                            }],
                            "validation": {
                                "isRequired": true,
                                "message": "Username is required",
                                type: 'text',
                            }
                        },
                        {
                            id: 11,
                            leafTitle: "Password",
                            type: "text-input",
                            defSelectKey: 'password',
                            inputType: 'password',
                            labelSize: 3,
                            size: 9,
                            "bindLeafData": [{
                                "hideWhen": "okta",
                                "bindWith": "authType",
                                "id": 9
                            }]
                        },
                        {
                            id: 11,
                            leafTitle: "Confirm Password",
                            type: "text-input",
                            defSelectKey: 'confPassword',
                            inputType: 'password',
                            labelSize: 3,
                            size: 9,
                            "validation": {
                                "message": "It should match with Password",
                                type: 'conf-password',
                            },
                            "bindLeafData": [{
                                "bindWith": "password",
                                "isPrimary": true,
                            },
                            {
                                "hideWhen": "okta",
                                "bindWith": "authType",
                                "id": 9
                            }
                            ]
                        },
                        {
                            "id": 9,
                            "leafTitle": "Cloud Services",
                            "type": "multi-checkbox",
                            "defSelectKey": "instanceId",
                            "helperText": "Please select Add-on services",
                            labelSize: 12,
                            size: 12,
                            pageId: 1,
                            "apiKey": "listCloudServicesAPI",
                            "metrics": {},
                            validation: {
                                isRequired: true,
                                type: 'checkbox',
                                // showAlert: true,
                            }
                        },
                        {
                            id: 10,
                            type: 'image',
                            icon: "azure",
                            label: "Azure",
                            width: 28,
                            groupId: 'accounts',
                            pageId: 1,
                            "bindLeafData": [{
                                "showWhen": "azure",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 13,
                            leafTitle: "Accounts",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "acct",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accounts',
                            apiKey: "providerSubscriptionId",
                            "bindLeafData": [{
                                "showWhen": "azure",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                            metrics: {},
                            validation: {
                                isRequired: true,
                                message: "Please select any value for accounts",
                                type: 'text'
                            }
                        },
                        {
                            id: 6,
                            leafTitle: "Stack Accounts",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "stkAcc",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accounts',
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                            "bindLeafData": [{
                                "showWhen": "azure",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 6,
                            leafTitle: "CSP Customers",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "cspCst",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accounts',
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                            "bindLeafData": [{
                                "showWhen": "azure",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 6,
                            leafTitle: "Stack Subscriptions",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "stkSb",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accounts',
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                            "bindLeafData": [{
                                "showWhen": "azure",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 10,
                            type: 'image',
                            icon: "aws",
                            pageId: 1,
                            groupId: 'accAzure',
                            "bindLeafData": [{
                                "showWhen": "aws",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 6,
                            leafTitle: "Accounts",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "acct1",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accAzure',
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                            "bindLeafData": [{
                                "showWhen": "aws",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 6,
                            leafTitle: "Stack Accounts",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "stkacc1",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accAzure',
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                            "bindLeafData": [{
                                "showWhen": "aws",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 6,
                            leafTitle: "CSP Customers",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "cspcst1",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accAzure',
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                            "bindLeafData": [{
                                "showWhen": "aws",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },
                        {
                            id: 6,
                            leafTitle: "Stack Subscriptions",
                            "isHawkUI": true,
                            type: "select",
                            mode: "multiple",
                            defSelectKey: "stksub1",
                            helperText: "Please Select Project",
                            labelSize: 4,
                            size: 8,
                            pageId: 1,
                            groupId: 'accAzure',
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                            "bindLeafData": [{
                                "showWhen": "aws",
                                "bindWith": "instanceId",
                                "id": 9
                            }],
                        },

                    ]
                }
            ];
            break;

        case 'AddDimentionModal':
            data = [
                {
                    actionAPIKey: 'addEditEnvironmentAPI',
                    actionButtonText: 'Add',
                    modalWidth: 500,
                    leafs: [
                        {
                            id: 1,
                            leafTitle: "Dimentions",
                            type: "select",
                            defSelectKey: "dimentions",
                            mode: "multiple",
                            labelSize: 3,
                            size: 9,
                            apiKey: "costFlowsApi",
                            metrics: {},
                        },
                    ]
                }
            ]
            break;
        case 'autoCreateDomainAPI':
            data = [
                {
                    actionAPIKey: 'addEditEnvironmentAPI',
                    actionButtonText: 'Add',
                    modalWidth: 500,
                    leafs: [
                        {
                            id: 1,
                            leafTitle: "Environment",
                            type: "select",
                            defSelectKey: "environment",
                            mode: "multiple",
                            labelSize: 3,
                            size: 9,
                            apiKey: "costFlowsApi",
                            metrics: {},
                        },
                    ]
                }
            ]
            break;

        case 'AddEditPackageModal':
            data = [
                {
                    actionAPIKey: 'updateAlertPrefsAPI',
                    dataAPIKey: 'listResourceOrderListAPI',
                    modalWidth: 700,
                    leafs: [
                        {
                            id: 1,
                            leafTitle: "Package Name",
                            type: "text-input",
                            defSelectKey: 'packName',
                            inputType: 'string',
                            labelSize: 3,
                            size: 6,
                        },
                        {
                            id: 2,
                            defSelectKey: "gropuResourcesList",
                            type: 'datatable',
                            noDataText: 'Group Resources can\'t be retrieved',
                            hideToolBar: true,
                            apiKey: "testMetricAPI",
                            size: 12,
                            selectableRows: 'multiple',
                            pagination: false,
                            columns: [
                                { display: true, name: 'Alert Type', key: 'alertType', isRowSelection: true },
                                { display: true, name: 'Instance ID', key: 'instanceId', isRowSelection: true },
                                { display: true, name: 'Current Instance Type', key: 'current' },
                                { display: true, name: 'Resource Id', key: 'resourceId', isRowSelection: true },
                                { display: true, name: 'Usage Date', key: 'usageDate', },
                                { display: true, name: 'variance', key: 'variance', },
                            ],
                        },
                    ]
                }];

            break;
        case 'addEditRatePack':

            data = [
                {
                    actionAPIKey: 'updateAlertPrefsAPI',
                    dataAPIKey: 'listResourceOrderListAPI',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: "Pack Name",
                            type: "text-input",
                            defSelectKey: 'packName',
                            inputType: 'string',
                            labelSize: 3,
                            size: 9,
                        },
                        {
                            id: 209,
                            leafTitle: "Environment",
                            type: "select",
                            defSelectKey: "env",
                            labelSize: 3,
                            size: 9,
                            apiKey: "envTypeListAPI",
                            metrics: {},
                        },
                        {
                            id: 3,
                            type: "tabs",
                            size: 12,
                            defSelectKey: 'packCombo',
                            groupId: 'accounts',
                            tabLeafs: [
                                {
                                    id: 0,
                                    leafTitle: "Price List",
                                    type: "text-input",
                                    defSelectKey: 'priceList',
                                    inputType: 'string',
                                    labelSize: 3,
                                    size: 9,
                                },
                                {
                                    id: 1,
                                    leafTitle: "Category",
                                    type: "select",
                                    defSelectKey: "category",
                                    labelSize: 3,
                                    size: 9,
                                    apiKey: "providerSubscriptionId",
                                    metrics: {},
                                },
                                {
                                    id: 322,
                                    leafTitle: "Sub-Category",
                                    type: "select",
                                    defSelectKey: "subCategory",
                                    labelSize: 3,
                                    size: 9,
                                    apiKey: "providerSubscriptionId",
                                    metrics: {},
                                    workFlowDefSelectKeys: ["env"],
                                    "bindLeafData": [{
                                        "bindWith": "category",
                                        "id": 1
                                    }]
                                },
                                {
                                    id: 2,
                                    leafTitle: "Unit",
                                    type: "select",
                                    defSelectKey: 'unit',
                                    labelSize: 3,
                                    size: 9,
                                    apiKey: "providerSubscriptionId",
                                    metrics: {},
                                    workFlowDefSelectKeys: ["env", "category"],
                                    "bindLeafData": [{
                                        "bindWith": "subCategory",
                                        "id": 322,
                                    }]
                                },
                                {
                                    id: 3,
                                    leafTitle: "Environment State",
                                    leafSubTitle: "Active",
                                    type: "toggle",
                                    defSelectKey: "envState",
                                    labelSize: 5,
                                    size: 7,
                                    "bindLeafData": [{
                                        "hideWhen": "S-2",
                                        "bindWith": "category",
                                        "id": 1
                                    }]
                                },
                                {
                                    id: 4,
                                    leafTitle: 'Name',
                                    type: 'text-input',
                                    inputType: 'string',
                                    defSelectKey: 'name',
                                    labelSize: 4,
                                    size: 8,
                                    "bindLeafData": [{
                                        "hideWhen": "KUBERNETES",
                                        "bindWith": "env",
                                        "id": 2,
                                        "isExternal": true,
                                    }]
                                },
                                {
                                    id: 7,
                                    leafTitle: "Pricing Model",
                                    type: "select",
                                    isHawkUI: true,
                                    defSelectKey: "pModel",
                                    labelSize: 4,
                                    size: 4,
                                    apiKey: "providerSubscriptionId",
                                },
                                {
                                    id: 8,
                                    leafTitle: 'Unit',
                                    type: 'text-input',
                                    inputType: 'number',
                                    labelSize: 1,
                                    size: 3,
                                    defSelectKey: 'unit',
                                },
                                {
                                    id: 9,
                                    leafTitle: 'Amount',
                                    type: 'text-input',
                                    inputType: 'number',
                                    defSelectKey: 'amt',
                                    labelSize: 4,
                                    size: 4,
                                },
                            ],
                        }]
                }]
            break;
        case 'manageRatePack':
            data = [
                {
                    actionAPIKey: 'updateAlertPrefsAPI',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: "Environment",
                            type: "select",
                            isHawkUI: true,
                            defSelectKey: "env",
                            labelSize: 6,
                            size: 6,
                            apiKey: "envTypeListAPI",
                        },
                        {
                            id: 2,
                            leafTitle: "Cluster",
                            type: "select",
                            isHawkUI: true,
                            defSelectKey: "cluster",
                            labelSize: 6,
                            size: 6,
                            apiKey: "providerSubscriptionId",
                        },
                        {
                            id: 3,
                            leafTitle: "Pod",
                            type: "select",
                            isHawkUI: true,
                            defSelectKey: "pod",
                            labelSize: 6,
                            size: 6,
                            apiKey: "listAlertItemsAPI",
                            "bindLeafData": [
                                {
                                    "bindWith": "env",
                                    "id": 1,
                                    "showWhen": ['KUBERNETES']
                                },
                                {
                                    "bindWith": "cluster",
                                    "id": 2,
                                    "showWhen": ['S-2']
                                }
                            ]
                        },
                        {
                            id: 4,
                            leafTitle: 'Amount',
                            type: 'text-input',
                            inputType: 'number',
                            defSelectKey: 'amt',
                            labelSize: 6,
                            size: 6,
                            "bindLeafData": [
                                {
                                    "bindWith": "cluster",
                                    "id": 2,
                                    "showWhen": ['S-2', 'S-1', 'S-4']
                                }
                            ]
                        },
                        {
                            "id": 13,
                            "size": 12,
                            "type": "multi-inputs",
                            "defSelectKey": "slabs",
                            groupId: 'g1',
                            "bindLeafData": [
                                {
                                    "showWhen": ['S-2', 'S-1', 'S-4'],
                                    "bindWith": "cluster",
                                    "id": 2,
                                    "isPrimary": true
                                }
                            ],
                            "inputList": [
                                {
                                    leafTitle: "Slab",
                                    indexing: true,
                                    type: "text-input",
                                    defSelectKey: "slab",
                                    inputType: 'string',
                                    labelSize: 1,
                                    size: 2,
                                },
                                {
                                    leafTitle: "Rate",
                                    type: "text-input",
                                    inputType: 'number',
                                    defSelectKey: "rate",
                                    labelSize: 1,
                                    size: 2,
                                },
                                {
                                    id: 11,
                                    type: 'price-input',
                                    inputType: 'currency',
                                    size: 3,
                                    isHawkUI: true,
                                    prefix: '₹',
                                    defSelectKey: "adjustment",
                                    "bindLeafData": [{
                                        "bindWith": "rate",
                                        "id": 3
                                    }],
                                    "bindTargetLeafData": {
                                        "bindWith": "total",
                                        "id": 3
                                    }
                                },
                                {
                                    leafTitle: "",
                                    type: "text-input",
                                    inputType: 'currency',
                                    defSelectKey: "total",
                                    labelSize: 0,
                                    size: 2,
                                },
                            ]
                        }
                    ]
                }
            ];
            break;

        case 'editRateLineAPI':
            data = [
                {
                    actionAPIKey: 'updateAlertPrefsAPI',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: 'Item Name',
                            type: 'text-input',
                            inputType: 'string',
                            defSelectKey: 'itemname',
                            labelSize: 4,
                            size: 8,
                        },
                        {
                            id: 2,
                            leafTitle: 'Tage Based Rates',
                            type: 'group-radio',
                            "apiKey": "billOpsUserTypeListAPI",
                            defSelectKey: 'tbr',
                            labelSize: 4,
                            size: 8,
                        },
                        {
                            id: 3,
                            leafTitle: "Tag Name",
                            type: "select",
                            isHawkUI: true,
                            defSelectKey: "tName",
                            labelSize: 6,
                            size: 6,
                            apiKey: "providerSubscriptionId",
                        },
                        {
                            id: 4,
                            leafTitle: 'Name',
                            type: 'text-input',
                            inputType: 'string',
                            defSelectKey: 'name',
                            labelSize: 4,
                            size: 8,
                        },
                        {
                            id: 5,
                            leafTitle: 'Category',
                            type: 'text-input',
                            inputType: 'string',
                            defSelectKey: 'cat',
                            labelSize: 4,
                            size: 8,
                        },
                        {
                            id: 6,
                            leafTitle: 'Sub-Category',
                            type: 'text-input',
                            inputType: 'string',
                            defSelectKey: 'sCat',
                            labelSize: 4,
                            size: 8,
                        },
                        {
                            id: 7,
                            leafTitle: "Pricing Model",
                            type: "select",
                            isHawkUI: true,
                            defSelectKey: "pModel",
                            labelSize: 4,
                            size: 4,
                            apiKey: "providerSubscriptionId",
                        },
                        {
                            id: 8,
                            leafTitle: 'Unit',
                            type: 'text-input',
                            inputType: 'number',
                            labelSize: 1,
                            size: 3,
                            defSelectKey: 'unit',
                        },
                        {
                            id: 9,
                            leafTitle: 'Amount',
                            type: 'text-input',
                            inputType: 'number',
                            defSelectKey: 'amt',
                            labelSize: 4,
                            size: 4,
                        },

                    ]
                }
            ]
            break;
        case 'AddEnv':
            data = [
                {
                    actionAPIKey: 'addEditEnvironmentAPI',
                    dataAPIKey: 'listResourceOrderListAPI',
                    actionButtonText: 'Add Environment',
                    leafs: [
                        {
                            id: 1,
                            leafTitle: "Environment State",
                            leafSubTitle: "Active",
                            type: "toggle",
                            defSelectKey: "envState",
                            labelSize: 5,
                            size: 7,
                        },
                        {
                            id: 2,
                            leafTitle: "Environment Type",
                            type: "select",
                            isHawkUI: true,
                            defSelectKey: "projects",
                            labelSize: 5,
                            size: 7,
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                        },
                        {
                            "id": 3,
                            "leafTitle": "Environment Name",
                            "type": 'select',
                            isHawkUI: true,
                            labelSize: 5,
                            "size": 7,
                            isHawkUI: true,
                            "apiKey": "listClusterAPI",
                            "defSelectKey": "envName",
                            "metrics": {
                            },
                        },
                    ]
                }
            ]
            break;
        case 'EditEnv':
            data = [
                {
                    "actionAPIKey": "addEditEnvironmentAPI",
                    "dataAPIKey": "envConnParamListAPI",
                    "actionButtonText": "Confirm",
                    "modalWidth": 800,
                    "leafs": [
                        {
                            "id": 1,
                            "leafTitle": "Environment State",
                            "leafSubTitle": "Active",
                            "type": "toggle",
                            "defSelectKey": "envState",
                            "labelSize": 5,
                            "size": 7
                        },
                        {
                            "id": 2,
                            "leafTitle": "Environment Name",
                            "type": "text-input",
                            "inputType": "string",
                            "labelSize": 5,
                            "size": 7,
                            "isHawkUI": true,
                            "defSelectKey": "envName",
                            "metrics": {
                                "types": [
                                    "*"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "leafTitle": "Environment Type",
                            "type": "select",
                            "labelSize": 5,
                            "size": 7,
                            "isHawkUI": true,
                            "apiKey": "envTypeListAPI",
                            "defSelectKey": "envType"
                        },
                        {
                            "id": 4,
                            "leafTitle": "ARN List",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "AWS_ARN",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AWS",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 5,
                            "leafTitle": "Payee Account Id",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "AWS_ACCOUNT_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AWS",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 6,
                            "leafTitle": "Billing Bucket Name",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "BILLING_BUCKET_NAME",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AWS",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 7,
                            "leafTitle": "Billing Bucket Region",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "BILLING_BUCKET_REGION",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AWS",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 8,
                            "leafTitle": "Billing Report Prefix",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "BILLING_REPORT_PREFIX",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AWS",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 9,
                            "leafTitle": "Billing Report Name",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "BILLING_REPORT_NAME",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AWS",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 10,
                            "leafTitle": "Tenant ID",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "TENANT_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": [
                                    "AZURE",
                                    "AZURE_STACK"
                                ],
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 11,
                            "leafTitle": "Application Access Key",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "APPLICATION_ACCESS_KEY",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": [
                                    "AZURE",
                                    "AZURE_STACK"
                                ],
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 12,
                            "leafTitle": "Application ID",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "APPLICATION_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": [
                                    "AZURE",
                                    "AZURE_STACK"
                                ],
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 13,
                            "leafTitle": "Subscription ID",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "PROVIDER_SUBSCRIPTION_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AZURE_STACK",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 14,
                            "leafTitle": "Resource Manager Endpoint",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "ARM_ENDPOINT",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AZURE_STACK",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 15,
                            "leafTitle": "Offer Durable ID",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "OFFER_DURABLE_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "AZURE",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 16,
                            "leafTitle": "Type",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_ACCOUNT_TYPE",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 17,
                            "leafTitle": "Project Id",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_PROJECT_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 18,
                            "leafTitle": "Private Key Id",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_PRIVATE_KEY_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 19,
                            "leafTitle": "Private Key",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_PRIVATE_KEY",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 20,
                            "leafTitle": "Client Email",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_CLIENT_EMAIL",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 21,
                            "leafTitle": "Client Id",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_CLIENT_ID",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 22,
                            "leafTitle": "Client Cert Url",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_CLIENT_X509_CERT_URL",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 23,
                            "leafTitle": "Dataset Name",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_DATASET_NAME",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 24,
                            "leafTitle": "GCP Table Name",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "GCP_TABLE_NAME",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "GCP",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 25,
                            "leafTitle": "User Name",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_USER_NAME",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 26,
                            "leafTitle": "Password",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_PASSWORD",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 27,
                            "leafTitle": "URL",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_URL",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 28,
                            "leafTitle": "Host",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_SERVICE_HOST",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 29,
                            "leafTitle": "Port",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_SERVICE_PORT",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 30,
                            "leafTitle": "CA Cert",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_SERVICE_CA_CRT",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 31,
                            "leafTitle": "Token",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_SERVICE_TOKEN",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 32,
                            "leafTitle": "Verify SSL",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_SERVICE_VERIFYSSL",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 33,
                            "leafTitle": "Client Key",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_CLIENT_KEY",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        },
                        {
                            "id": 34,
                            "leafTitle": "Client Key Certificate",
                            "type": "text-input",
                            "inputType": "string",
                            "isHawkUI": true,
                            "defSelectKey": "KUBERNETES_CLIENT_CERT",
                            "labelSize": 5,
                            "size": 7,
                            "metrics": {},
                            "groupId": "subItems",
                            "bindLeafData": [{
                                "showWhen": "KUBERNETES",
                                "bindWith": "envType",
                                "id": 3
                            }]
                        }
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
                            "id": 21, "leafTitle": "Name", "type": "text-input", "inputType": "string",
                            "size": 4,
                            "defSelectKey": "packName", "helperText": "Name of the Rate pack", "metrics": {},
                            "validation": { "isRequired": true, "message": "At-least one tenant should be selected" }
                        }, {
                            "id": 22,
                            "leafTitle": "Enable Pack Level Rates",
                            "type": "group-radio",
                            "defSelectKey": "packLevelRate",
                            "size": 3, "apiKey": "cspRatePackTypeListAPI",
                            "helperText": "Choose between Pack level rates vs line item rates"
                        },
                        {
                            "id": 23, "leafTitle": "Rate", "type": "text-input", "inputType": "string",
                            "defSelectKey": "rate", "size": 3, "helperText": "Please enter pack level rates"
                        },
                        {
                            "id": 1,
                            "leafTitle": "Manage Cloud Connections",
                            "size": 12,
                            "type": "nested-multi-dropdown-field-with-input",
                            "apiKey": "cloudConnectionsAPI",
                            "bindLeafData": [{
                                "hideWhen": "false",
                                "bindWith": "packLevelRate",
                                "id": 22,
                                "bindtoComponentId": "v1",
                            }],
                            "defSelectKey": "cloudConnections",
                            'componentList': [
                                {
                                    "id": 'd1',
                                    "title": "Project",
                                    "size": 2,
                                    "type": 'select',
                                    "apiKey": "listRegionAPI",
                                    "defSelectKey": "listRegionSel",
                                    "helperText": "Please select Project",
                                    "metrics": {
                                        "types": [
                                            "*"
                                        ]
                                    },
                                },
                                {
                                    "id": 'd2',
                                    "title": "VM Group",
                                    "type": 'select',
                                    "size": 2,
                                    "apiKey": "listClusterAPI",
                                    "defSelectKey": "listClusterSel",
                                    "helperText": "Please select VM Group",
                                    "metrics": {
                                        "types": [
                                            "*"
                                        ]
                                    },
                                },
                                {
                                    "id": 'd3',
                                    "title": "Instance",
                                    "type": 'select',
                                    "size": 2,
                                    "apiKey": "listAWSInstanceTypeAPI",
                                    "defSelectKey": "listInstanceSel",
                                    "helperText": "Please select Instance",
                                    "metrics": {
                                        "types": [
                                            "*"
                                        ]
                                    },
                                },
                                {
                                    "id": "v1",
                                    "type": "input",
                                    "size": 1,
                                    "subType": "switch",
                                    "label": "Primary"
                                },
                                {
                                    id: "v2",
                                    type: 'input',
                                    "size": 4,
                                    subType: 'number',
                                    label: "Replicas",
                                },
                                {
                                    id: "v3",
                                    type: 'input',
                                    "size": 4,
                                    subType: 'number',
                                    label: "Nodes",
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
                            "bindLeafData": [{
                                "hideWhen": "KUBERNETES",
                                "bindWith": "type",
                                "id": 10
                            }]
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
                            "bindLeafData": [{
                                "hideWhen": "Amazon AWS",
                                "bindWith": "type",
                                "id": 10
                            }]
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
        case 'ManageCspService':
            data = [
                {
                    "actionAPIKey": "saveInstanceTypeChangeAPI",
                    "leafs": [
                        {
                            "id": 1001,
                            "leafTitle": "Service",
                            "type": "select",
                            "defSelectKey": "category",
                            "size": 12,
                            "apiKey": "listAWSInstanceTypeAPI",
                            "helperText": "Please select appropriate service",
                            "metrics": {}
                        },
                        {
                            "id": 1002,
                            "leafTitle": "Resource",
                            "type": "select",
                            "defSelectKey": "resourceId",
                            "size": 12,
                            "mode": "multiple",
                            "apiKey": "listAWSInstanceTypeAPI",
                            "helperText": "Please select appropriate resource",
                            "bindLeafData": [{
                                "bindWith": "category",
                                "id": "1001"
                            }],
                            "metrics": {}
                        },
                        {
                            "id": 1006,
                            "leafTitle": "Cost Type",
                            "type": "select",
                            "defSelectKey": "costType",
                            "size": 6,
                            "apiKey": "listAWSInstanceTypeAPI",
                            "helperText": "Please select appropriate cost type",
                            "metrics": {}
                        },
                        {
                            "id": 1003,
                            "leafTitle": "Computation Type",
                            "type": "select",
                            "defSelectKey": "computationType",
                            "size": 6,
                            "apiKey": "listAWSInstanceTypeAPI",
                            "helperText": "Please select appropriate computation type",
                            "metrics": {}
                        },
                        {
                            "id": 1004,
                            "leafTitle": "Comment",
                            "type": "text-input",
                            "inputType": "string",
                            "defSelectKey": "comment",
                            "size": 12,
                            "helperText": "Please enter comment"
                        },
                        {
                            "id": 1005,
                            "leafTitle": "Rate Slab",
                            "size": 12,
                            "type": "nested-multi-dropdown-field-with-input",
                            "apiKey": "cloudConnectionsAPI",
                            "defSelectKey": "chargeBackCustomerRateSlabDetails",
                            "metrics": {},
                            "componentList": [
                                {
                                    "id": "d1",
                                    "title": "Type",
                                    "size": 2,
                                    "type": "select",
                                    "apiKey": "listAWSInstanceTypeAPI",
                                    "defSelectKey": "type",
                                    "selectDefaultValue": true,
                                    "helperText": "Please select cost type",
                                    "metrics": {}
                                },
                                {
                                    "id": "v2",
                                    "type": "input",
                                    "size": 4,
                                    "subType": "number",
                                    "label": "Quantity"
                                },
                                {
                                    "id": "v3",
                                    "type": "input",
                                    "size": 4,
                                    "subType": "number",
                                    "label": "Rate"
                                }
                            ]
                        }
                    ]
                }
            ]
        case 'EditRateLine':
            data = [
                {
                    actionAPIKey: 'addEditEnvironmentAPI',
                    dataAPIKey: 'listResourceOrderListAPI',
                    actionButtonText: 'Add',
                    modalWidth: 900,
                    currencyDefSelectKey: 'globalCur',
                    leafs: [
                        {
                            "id": 1,
                            "leafTitle": "Price List Name",
                            "type": 'text-input',
                            inputType: 'text',
                            labelSize: 4,
                            size: 8,
                            groupId: 'g1',
                            isHawkUI: true,
                            "defSelectKey": "priceListName",
                            validation: {
                                isRequired: true,
                                type: 'text',
                                message: 'Price List Name is required'
                            }
                        },
                        {
                            "id": 1006,
                            "leafTitle": "Cost Type",
                            "type": "select",
                            groupId: 'g1',
                            labelSize: 4,
                            size: 8,
                            "defSelectKey": "costType",
                            "size": 6,
                            "apiKey": "listAWSInstanceTypeAPI",
                            "metrics": {}
                        },
                        {
                            id: 2,
                            leafTitle: "Tag Name",
                            "type": 'select',
                            labelSize: 4,
                            size: 8,
                            groupId: 'g1',
                            isHawkUI: true,
                            "bindingGroup": 'b1',
                            "apiKey": "providerSubscriptionId",
                            "defSelectKey": "tagName",
                        },
                        {
                            "id": 4,
                            "leafTitle": "Category",
                            type: 'select',
                            labelSize: 4,
                            size: 8,
                            groupId: 'g1',
                            "bindingGroup": 'b1',
                            isHawkUI: true,
                            apiKey: 'listAWSInstanceTypeAPI',
                            "defSelectKey": "category",
                            workFlowDefSelectKeys: ["costType"],
                            "bindLeafData": [{
                                "bindWith": "tagName",
                                "id": 2
                            }],
                            validation: {
                                isRequired: true,
                                type: 'select',
                                message: 'Please select any category'
                            }
                        },
                        {
                            "id": 5,
                            "leafTitle": "SubCategory",
                            type: 'select',
                            isHawkUI: true,
                            labelSize: 4,
                            size: 8,
                            readOnly: true,
                            groupId: 'g1',
                            "bindingGroup": 'b1',
                            apiKey: 'listRegionAPI',
                            "defSelectKey": "subCategory",
                            "bindLeafData": [{
                                "bindWith": "category",
                                "id": 4
                            }],
                        },
                        {
                            "id": 6,
                            "leafTitle": "Settlement Date",
                            "type": 'text-input',
                            inputType: 'date',
                            labelSize: 4,
                            size: 5,
                            groupId: 'g1',
                            isHawkUI: true,
                            "defSelectKey": "settleDate",
                            validation: {
                                isRequired: true,
                                type: 'date'
                            }
                        },
                        {
                            "id": 7,
                            "leafTitle": "Billing Cycle",
                            "type": 'text-input',
                            inputType: 'range',
                            labelSize: 4,
                            size: 8,
                            groupId: 'g1',
                            isHawkUI: true,
                            "defSelectKey": "billCycle",
                            validation: {
                                isRequired: true,
                                type: 'date-range'
                            }
                        },
                        {
                            id: 8,
                            leafTitle: "Pricing Model",
                            type: "text-input",
                            inputType: 'string',
                            isHawkUI: true,
                            defSelectKey: "pricingModal",
                            labelSize: 4,
                            size: 4,
                            groupId: 'g1',
                        },
                        {
                            id: 9,
                            leafTitle: "Unit",
                            type: "text-input",
                            inputType: 'text',
                            isHawkUI: true,
                            defSelectKey: "unit",
                            labelSize: 1,
                            suffix: 'Hr',
                            size: 3,
                            groupId: 'g1',
                        },
                        {
                            id: 118,
                            leafTitle: "Currency",
                            type: "select",
                            apiKey: 'listCurrencyAPI',
                            isHawkUI: true,
                            defSelectKey: "globalCur",
                            labelSize: 4,
                            size: 2,
                            groupId: 'g1',
                        },
                        {
                            id: 10,
                            leafTitle: "Current Amount",
                            "type": 'text-input',
                            inputType: 'currency',
                            prefix: '$',
                            labelSize: 2,
                            size: 4,
                            isHawkUI: true,
                            groupId: 'g1',
                            defSelectKey: "currAmt",
                        },
                        {
                            id: 11,
                            leafTitle: "Adjustment",
                            type: 'price-input',
                            inputType: 'currency',
                            labelSize: 4,
                            size: 8,
                            isHawkUI: true,
                            prefix: '₹',
                            groupId: 'g1',
                            defSelectKey: "adjustment",
                            "bindLeafData": [{
                                "bindWith": "currAmt",
                                "id": 3
                            }],
                            "bindTargetLeafData": {
                                "bindWith": "newAmt",
                                "id": 3
                            }
                        },
                        {
                            id: 12,
                            leafTitle: "New Amount",
                            "type": 'text-input',
                            inputType: 'currency',
                            prefix: '$',
                            labelSize: 4,
                            size: 8,
                            isHawkUI: true,
                            groupId: 'g1',
                            defSelectKey: "newAmt",
                        },
                        {
                            "id": 13,
                            "size": 12,
                            "type": "multi-inputs",
                            "defSelectKey": "slabs",
                            groupId: 'g1',
                            "inputList": [
                                {
                                    leafTitle: "Slab",
                                    indexing: true,
                                    type: "text-input",
                                    defSelectKey: "slab",
                                    inputType: 'string',
                                    labelSize: 1,
                                    size: 2,
                                },
                                {
                                    leafTitle: "Rate",
                                    type: "text-input",
                                    inputType: 'number',
                                    defSelectKey: "rate",
                                    labelSize: 1,
                                    size: 2,
                                },
                                {
                                    id: 11,
                                    type: 'price-input',
                                    inputType: 'currency',
                                    size: 3,
                                    isHawkUI: true,
                                    prefix: '₹',
                                    defSelectKey: "adjustment",
                                    "bindLeafData": [{
                                        "bindWith": "rate",
                                        "id": 3
                                    }],
                                    "bindTargetLeafData": {
                                        "bindWith": "total",
                                        "id": 3
                                    }
                                },
                                {
                                    leafTitle: "",
                                    type: "text-input",
                                    inputType: 'currency',
                                    // prefix: '$',
                                    defSelectKey: "total",
                                    labelSize: 0,
                                    size: 2,
                                },
                            ]
                        },
                    ]
                }
            ]
            break;

        case "AddGroup":
        case "EditGroup":
            data = manageGroup();
            break;
        case "AutoGroup":
            data = autoGroup();
            break;
        case "EnvSelectionModal":
            data = envSelectionComponentData();
            break;
        case "AddEditAzureStackRatePackCardModal":
            data = getAddEditAzureStackRatePackCardModal();
            break;
        case "editCloudAccounts":
            data = getEditCloudAccountsData();
            break;
        default:
            data = drillDownData();
            break;
    }

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);

});

app.post('/api/scenario/filters', function (req, res) {
    addDelay();
    let data = [
        {
            "key": "tenantId",
            "name": "Tenant Id",
            "sortOrder": 5,
            "apiKey": "tenantId",
        },
        {
            "key": "customerId",
            "apiKey": "customerId",
            "name": "Page Customer ID",
            "sortOrder": 4,
            "metrics": {
                "types": [
                    "*"
                ]
            },
            "bindParam": { "bindWith": "tenantId" },
        }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/resource/detail', function (req, res) {
    addDelay();
    let data = [
        { name: 'name', key: 'key', unit: 'GB' }
    ];
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/scenario/editRow', function (req, res) {
    addDelay();
    let data = [
        {
            title: 'RATE PACK #1',
            actionAPIKey: 'addEditEnvironmentAPI',
            dataAPIKey: 'listResourceOrderListAPI',
            "leafs": [
                {
                    "id": 12,
                    "isHawkUI": true,
                    "type": "rowDatatable",
                    "apiKey": "listCatalogRateLinesAPI",
                    "size": 12,
                    "hideToolBar": true,
                    "filter": false,
                    "noDataText": "No rates available",
                    "metrics": {},
                    "defaultRowPerPage": 10,
                    leafTitle: 'Rate pack details',
                    width: '40%',
                    "columns": [
                        {
                            "name": "Id",
                            "key": "rateId",
                            "display": false
                        },
                        {
                            "name": "Price List",
                            "key": "priceList",
                            "display": true,
                            "filter": true,
                            type: 'pill',
                            pillType: 'secondary',
                            "filterType": "textField"
                        },
                        {
                            "name": "Name",
                            "key": "name",
                            "display": true,
                            "filter": true,
                            "filterType": "textField"
                        },
                        {
                            "name": "Primary",
                            "key": "primary",
                            "display": true,
                            "filter": true,
                            "type": "toggle"
                        },
                        {
                            "name": "Category",
                            "key": "category",
                            "type": "multiselect",
                            "display": true,
                            "filter": false
                        },
                        {
                            "name": "SubCategory",
                            "key": "subcategory",
                            "type": "multiselect",
                            "display": true,
                            "filter": false
                        },
                        {
                            "name": "Tag",
                            "key": "tag",
                            "type": "multiselect",
                            "display": true,
                            "filter": false
                        },
                        {
                            "name": "Region",
                            "key": "region",
                            "type": "multiselect",
                            "display": true,
                            "filter": false
                        },
                        {
                            "name": "Pricing Modal",
                            "key": "pricingmodal",
                            "type": "multiselect",
                            "display": true,
                            "filter": false
                        },
                        {
                            "name": "Rate",
                            "key": "rate",
                            "type": "amount",
                            "display": true,
                            "filter": false
                        },
                        {
                            "name": "Currency",
                            "key": "currency",
                            "display": false
                        },
                        {
                            "name": "Unit",
                            "key": "unit",
                            "type": "drill",
                            "display": true,
                            "filter": false
                        },
                    ]
                },
                {
                    "id": 3,
                    "type": "keyValue",
                    leafTitle: 'Pricing',
                    width: '15%',
                    data: [
                        {
                            key: 'listcost',
                            title: 'List Cost',
                            value: '$10'
                        },
                        {
                            key: 'pricemode',
                            title: 'Price Mode',
                            value: 'On demand'
                        }
                    ]
                },
                {
                    "id": 4,
                    "type": "keyValue",
                    leafTitle: 'Resource',
                    width: '15%',
                    data: [
                        {
                            title: 'Ram',
                            value: '8'
                        },
                        {
                            title: 'vCPU',
                            value: '4'
                        },
                        {
                            title: 'Disk size(GB)',
                            value: '500'
                        }
                    ]
                },
                // {
                //     "id": 9,
                //     "type": "summary",
                //     "leafTitle": "Pricing",
                //     "size": 12,
                //     "width": "20%",
                //     "apiKey": "resourcePricingAttributesAPI"
                // },
                {
                    "id": 5,
                    "type": "form",
                    leafTitle: 'Comments',
                    width: '30%',
                    formLeafs: [
                        {
                            id: 4,
                            type: "text-input",
                            defSelectKey: 'details',
                            inputType: 'text-area',
                            size: 12,
                        },
                        {
                            id: 2,
                            leafTitle: "User Role",
                            type: "select",
                            defSelectKey: "projects",
                            labelSize: 12,
                            size: 12,
                            apiKey: "providerSubscriptionId",
                            metrics: {},
                        },
                        {
                            "id": 19,
                            "leafTitle": "Cloud Services",
                            "type": "multi-checkbox",
                            "defSelectKey": "instanceId",
                            "helperText": "Please select Add-on services",
                            labelSize: 12,
                            size: 12,
                            pageId: 1,
                            "apiKey": "listCloudServicesAPI",
                            "metrics": {},
                        },
                        {
                            id: 3,
                            leafTitle: "User ID",
                            type: "text-input",
                            defSelectKey: 'userId',
                            inputType: 'string',
                            labelSize: 12,
                            size: 12,
                            "bindLeafData": [{
                                "hideWhen": "S-2",
                                "bindWith": "projects",
                                "id": 2
                            }],
                        },
                        {
                            id: 4,
                            leafTitle: "First Name",
                            type: "text-input",
                            defSelectKey: 'firstName',
                            inputType: 'string',
                            labelSize: 12,
                            size: 12,
                            "bindLeafData": [{
                                "hideWhen": "S-2",
                                "bindWith": "projects",
                                "id": 2
                            }],
                        },
                        {
                            "id": 13,
                            "leafTitle": "Authentication",
                            "type": "group-radio",
                            "defSelectKey": "authType",
                            labelSize: 12,
                            size: 12,
                            "apiKey": "listAuthTypeAPI",
                            "metrics": {},
                        },
                    ]
                }
            ]
        }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/instance/singular', function (req, res) {

    addDelay();
    let data = []
    if (req.body.filters && req.body.filters.timeFilter === 'Last 30 Days') {
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
    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error testing in progress" });
    res.status(200).send(data);
});



app.post('/api/chargeback/global/currency', function (req, res) {
    addDelay();

    let types = req.body.types ? req.body.types[0].value : 'test';

    let data = [
        { name: `USD`, key: `$` },
        { name: `INR`, key: `₹`, selected: true },
        { name: `YEN`, key: `¥` },
        { name: `EUR`, key: `€` },
        { name: `GBP`, key: `£` },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/chargeback/rateline/instancetype', function (req, res) {
    addDelay();

    let types = req.body.types ? req.body.types[0].value : 'test';

    let data = [
        { name: `${types}-t1.small`, key: `${types}-t1.small` },
        { name: `${types}-t8.medium`, key: `${types}-t8.medium` },
        { name: `${types}-t5.medium`, key: `${types}-t5.medium` },
        { name: `${types}-t5.large`, key: `${types}-t5.large` },
        { name: `${types}-t5.small`, key: `${types}-t5.small` },
        { name: `${types}-t2.large`, key: `${types}-t2.large` },

    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});


app.post('/api/action/regionlist', function (req, res) {
    addDelay();

    let data = [
        { name: 'US-EAST-region', key: 'us-east' },
        { name: 'US-West-region', key: 'us-west', selected: true },
        { name: 'US-North-region', key: 'us-north' },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/action/clusters', function (req, res) {
    addDelay();
    let data = [];
    let types = req.body.types ? req.body.types[0].value : 'test';

    switch (types) {
        case 'us-east':
            data = [
                { name: 'East-1231', key: 'east-1231' },
                { name: 'East-645475', key: 'east-645475', },
                { name: 'East-98576', key: 'east-98576', selected: true },
                { name: 'East-45654', key: 'east-45654', },
            ];
            break;
        case 'us-north':
            data = [
                { name: 'North-1231', key: 'north-1231' },
                { name: 'North-645475', key: 'north-645475', },
                { name: 'North-98576', key: 'north-98576' },
                { name: 'North-45654', key: 'north-45654', },
            ];
            break;
        case 'us-west':
            data = [
                { name: 'West-1231', key: 'west-1231' },
                { name: 'West-645475', key: 'west-645475', },
                { name: 'West-98576', key: 'west-98576', selected: true },
                { name: 'West-45654', key: 'west-45654', },
            ];
            break;
        default:
            data = [
                { name: 'West-1231', key: 'west-1231' },
                { name: 'West-645475', key: 'west-645475' },
                { name: 'West-98576', key: 'west-98576' },
                { name: 'West-45654', key: 'west-45654' },
            ];
    };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/action/state', function (req, res) {
    addDelay();
    let data = ['Start', 'Stop'];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Internal Server Error" });
    res.status(200).send(data);
});

app.post('/api/user/environment/addeditenvironment', function (req, res) {

    let data = {
        key: 'SAVE_INST',
        variant: 'success',
        message: 'Details saved succesfully, refereshing your experience',
    };

    setResponseHeaders(res);
    //res.status(500).send("Internal Server Error");
    res.status(200).send(data);
});

app.post('/api/action/instancetypechange', function (req, res) {

    let data = {
        key: 'SAVE_INST',
        variant: 'success',
        message: 'Instance details saved succesfully',
    };

    setResponseHeaders(res);
    //res.status(500).send("Internal Server Error");
    res.status(200).send(data);
});


app.post('/api/action/save-env-details', function (req, res) {

    let data = {
        key: 'SAVE_ENV',
        variant: 'success',
        message: 'Environment details saved succesfully',
    };

    setResponseHeaders(res);
    //res.status(500).send("Internal Server Error");
    res.status(200).send(data);
});

app.post('/list/resources', function (req, res) {

    let data = ['res-123', 'res-1563', 'res-64546', 'res-6423', 'res-9787', 'res-5534'];

    setResponseHeaders(res);
    //res.status(500).send("Internal Server Error");
    res.status(200).send(data);
});

app.post('/api/resource/summary', function (req, res) {

    let data = [
        [{ title: 'Account Id', value: '1234' }, { title: 'Last spending', value: '100.30 $' }],
        [{ title: 'AWS Id', value: '543' }, { title: 'Instance location', value: 'US-East' }],
        [{ title: 'Transaction Amount', value: '320.5000' }],
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/action/elbmonitoringtype', function (req, res) {

    let data = [
        { "key": "pool", "name": "Pool", "selected": false },
        { "key": "no-pool", "name": "No Pool", "selected": true },
        { "key": "hybrid", "name": "Hybrid", "selected": false },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/envtypes', function (req, res) {

    let data = [
        { "key": "1", "name": "Instance-1", "selected": false },
        { "key": "2", "name": "Instance-2", "selected": true },
        { "key": "3", "name": "Instance-3", "selected": false },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/action/availableroles', function (req, res) {

    let data = [
        { "key": "admin", "name": "Admin", "selected": false },
        { "key": "pwwer-user", "name": "Power User", "selected": true },
        { "key": "view", "name": "Viewer", "selected": false },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/action/cloudlist', function (req, res) {

    let data = [
        { "key": "aws", "name": "Ins-abc1234567", "selected": true },
        { "key": "azure", "name": "Ins-1234678998", "selected": true }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/elbinstancelist', function (req, res) {

    let data = [
        { "key": "s-abc1234567", "name": "Ins-abc1234567", "selected": true },
        { "key": "s-1234678998", "name": "Ins-1234678998", "selected": true },
        { "key": "s-adbc123456", "name": "Ins-adbc123456", "selected": false },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/alertItemList', function (req, res) {

    let data = [
        { "name": "Billing", "selected": true },
        { "name": "Utilization", "selected": true },
        { "name": "Action", "selected": false },
        { "name": "Kubernetes", "selected": false },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});




app.post('/api/action/accountlist', function (req, res) {

    let data = [
        { "key": "12323434", "name": "12323434", "selected": true },
        { "key": "324432443", "name": "324432443", "selected": true },
        { "key": "4324314324", "name": "4324314324", "selected": false },
        { "key": "647909876544", "name": "647909876544", "selected": false },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/elbmetriclist', function (req, res) {

    let data =
        [
            { "name": "CPU utilization", "key": "CPU_UTILIZATION", "defaultValues": { "v1": 80, }, "appearDefault": true },
            { "name": "Memory utilization", "key": "MEMORY_UTILIZATION", "defaultValues": { "v1": 10 } },
            { "name": "Network rate", "key": "NETWORK_RATE", "defaultValues": { "v1": 40 } },
            { "name": "Disk I/O rate", "key": "DISK_IO_RATE", "defaultValues": { "v2": 600 }, "appearDefault": true },
            { "name": "Network Util", "key": "NETWORK_UTIL", "defaultValues": { "v2": 20000 } },
            { "name": "Nginx CPU utilization", "key": "NGINX_CPU_UTILIZATION", "defaultValues": { "v1": 20, } }
        ]

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/action/elbmonitoringstatus', function (req, res) {

    let data = { "status": true }

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/csp/getamountsummarydata', function (req, res) {
    let data = [{
        "name": "Margin",
        "value": 1395.37,
        "secondaryAmount": 4000.87,
        "secondayAmountText": "(all clouds)",
        "trend": null,
        "unit": "$"
    }, {
        "name": "Bill Total",
        "value": 1369.27,
        "secondaryAmount": 4000.87,
        "secondayAmountText": "(all clouds)",
        "trend": null,
        "unit": "$"
    }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data)
});

app.post("/api/analytic/billProgress", function (req, res) {
    let data = billProgress;

    setResponseHeaders(res);
    res.status(200).send(data);
})

app.post('/api/analytic/summarydata', function (req, res) {
    let data = [
        {
            "type": "info",
            "list": [
                {
                    "name": "Instance Name",
                    "value": 'Clone CSP Test'
                },
                {
                    "name": "Instance ID",
                    "value": 'i-10003000'
                },
                {
                    "name": "Instance Type",
                    "value": 'm5a.2xlarge'
                }
            ],
        },
        {
            "name": "Sum Total",
            "value": 43243.37,
            "unit": "$",
        },
        {
            "name": "Current Billing Cycle",
            "value": 1369.27,
            "trend": "up",
            "color": "green",
            "unit": "$",
            "percentage": 24,
        },
        {
            "name": "Total Bil",
            "value": "1369.27",
            "trend": "down",
            "color": "red",
            "unit": "$",
            "percentage": 24,
        }
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);


});

app.post('/api/csp/getamounttotaldata', function (req, res) {

    let testData = [{
        "name": "Previous",
        "type": "previous",
        "fieldValue": "2213.37",
        "unit": "$",
        "mathOperator": "-",
        "order": 0
    }, {
        "name": "Payment",
        "type": "payment",
        "fieldValue": "213.37",
        "unit": "$",
        "mathOperator": "+",
        "order": 1
    }, {
        "name": "Current charge",
        "type": "current_charge",
        "fieldValue": "213.37",
        "unit": "$",
        "mathOperator": "=",
        "order": 2
    }, {
        "name": "Total amount due",
        "type": "total",
        "fieldValue": "89213.37",
        "unit": "$",
        "mathOperator": "",
        "order": 3
    }, {
        "name": "Forecasted bill",
        "type": "forecasted",
        "fieldValue": "99213.37",
        "unit": "$",
        "mathOperator": "-",
        "order": 4
    }];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(testData);


});

app.post('/api/csp/getcloudtotal', function (req, res) {
    let data = [{
        "name": "Total (Azure)",
        "fieldValue": "193.43",
        "type": "Azure",
        "unit": "$"
    }, {
        "name": "Bill Total (All Clouds)",
        "fieldValue": "17,984.94",
        "type": "total",
        "unit": "$"
    }]
    setResponseHeaders(res);
    res.status(200).send(data);
})

app.post('/api/user/userlist', function (req, res) {

    let data = [];

    if (req.body.drillParams && (req.body.drillParams.billingCycleFilter || req.body.drillParams.customerId)) {
        data = [
            { salesAmount: 4321.54, userId: 1, model: 'Season', desc: ["Test#-1: this is just test data", "Test#-2: this is just test data", "Test#-3: this is just test data", "Test#-4: end of the test data"], progress: 90, progressType: 'success', alert: null, fileName: 'test-image-1.pdf', mark: false, project: ['prj-1', 'prj-2'], status: 'processing', severity: ['critical'], email: 'i.am.test.user@gmail.com', roleName: 'Admin', accounts: Math.floor(Date.now() / 100000) },
            { salesAmount: 312452.54, userId: 2, model: 'Amount', desc: "Test#-2", progress: 30, progressType: 'warning', alert: 'Attention seeker alert', fileName: 'test-image-2.pdf', mark: false, project: ['prj-2', 'prj-5'], status: true, severity: ['low'], email: 'a2i.user@hotmail.com', roleName: 'Chain Admin', accounts: Math.floor(Date.now() / 5500.34) },
            { salesAmount: 4565332.54, userId: 7, model: 'Season', desc: "Test#-3", progress: 100, progressType: 'success', alert: 'Get summary info for your selected resource, Consumption is high, please rescale, Manage resource before exhaust', fileName: 'test-image-7.pdf', mark: false, project: ['prj-1', 'prj-0'], status: true, severity: ['medium'], email: 'acq.123@gmail.com', roleName: 'View', accounts: Math.floor(Date.now() / 99878767) }
        ];
    } else {
        data = [
            { editAPIKey: 'addEditRatePack',viewChart: '', salesAmount: 603243240.64, userId: 1, model: 'Season', desc: "Test#-1", progress: 90, progressType: 'success', alert: null, fileName: 'test-image-1.pdf', mark: false, project: ['prj-1', 'prj-2'], status: 'processing', severity: ['critical'], email: 'i.am.test.user@gmail.com', roleName: 'Admin', accounts: Math.floor(Date.now() / 10000.4), 'currency': '€' },
            { editAPIKey: 'addEditRatePack', viewChart: '', salesAmount: 12243.43, userId: 2, model: 'Season', desc: "Test#-2", progress: 30, progressType: 'warning', alert: 'Attention seeker alert', fileName: 'test-image-2.pdf', mark: false, project: ['prj-2', 'prj-5'], status: true, severity: ['low'], email: 'a2i.user@hotmail.com', roleName: 'Chain Admin', accounts: Math.floor(Date.now() / 5500.34), 'currency': '¥' },
            { editAPIKey: 'addUserComponentAPI',viewChart: '',  salesAmount: null, userId: 3, model: 'Amount', desc: ["Test#-1: this is just test data", "Test#-2: this is just test data", "Test#-3: this is just test data", "Test#-4: end of the test data"], progress: 20, progressType: 'danger', alert: 'Manage resource before exhaust', fileName: null, mark: false, project: ['prj-2', 'prj-6'], status: true, severity: ['low'], email: 'power.admin@global.in', roleName: 'API list', accounts: '12345', 'currency': '₹' },
            { editAPIKey: 'addUserComponentAPI', viewChart: '', salesAmount: null, userId: 4, model: 'Amount', desc: "Test#-4", progress: 75, progressType: 'info', alert: 'Consumption is high, please rescale', fileName: 'test-image-4.pdf', mark: false, project: ['prj-1', 'prj-4'], status: false, severity: ['critical'], email: 'admin.user@yahoo.in', roleName: 'Network Admin', accounts: Math.floor(Date.now() / 9898.14), 'currency': '£' },
            { editAPIKey: 'editEnvComponentAPI',viewChart: '',  salesAmount: 32432.312, userId: 6, model: 'Season', progress: 10, progressType: 'danger', alert: 'Go for it', fileName: null, mark: false, project: ['prj-7', 'prj-9'], status: true, severity: ['critical'], email: 'chain.clouds@global.com', roleName: 'Solo Man', accounts: '12343243245.44', 'currency': '$' },
            { editAPIKey: 'editEnvComponentAPI', viewChart: '', salesAmount: 7123.312, userId: 7, model: 'Amount', desc: "Test#-6", progress: 100, progressType: 'success', alert: 'Get summary info for your selected resource, Consumption is high.', fileName: 'test-image-7.pdf', mark: false, project: ['prj-1', 'prj-0'], status: true, severity: ['medium'], email: 'acq.123@gmail.com', roleName: 'View', accounts: Math.floor(Date.now() / 998787.33) }
        ];
    }
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);


});

app.post('/api/catalog/ratelines', function (req, res) {
    setResponseHeaders(res);
    res.status(200).send(rateLinesFakeData);
});


app.post('/api/catalog/paginated/ratelines', function (req, res) {
    setResponseHeaders(res);
    res.status(200).send(rateLinesFakeDataPaginated);
});

app.post('/api/user/alertemaillist', function (req, res) {

    let data = [
        { providerSubscriptionId: 'S-1', customerId: 123, email: 'i.am.test.user@gmail.com', billing: true, utilization: true, action: false, kubernetes: true, },
        { providerSubscriptionId: 'S-2', customerId: 789, email: 'a2i.user@hotmail.com', billing: false, utilization: true, action: true, kubernetes: true, },
        { providerSubscriptionId: 'S-3', customerId: 3, email: 'power.admin@global.in', billing: true, utilization: true, action: true, kubernetes: true, },
        { providerSubscriptionId: 'S-4', customerId: 4, email: 'admin.user@yahoo.in', billing: true, utilization: true, action: false, kubernetes: false, },
        { providerSubscriptionId: 'S-5', customerId: 5, email: 'chain.clouds@global.com', billing: true, utilization: false, action: true, kubernetes: false, },
        { providerSubscriptionId: 'S-4', customerId: 456, email: 'acq.123@gmail.com', billing: false, utilization: false, action: true, kubernetes: false, },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/updatealertprefs', function (req, res) {

    let data = {
        key: 'UPDATE_PREF',
        variant: 'success',
        message: 'Email preferences updated succesfully',
    };
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/updateUser', function (req, res) {

    let data = {
        key: 'UPDATE_USER',
        variant: 'success',
        message: 'User list updated succesfully',
    };
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/group/save', function (req, res) {

    let data = {
        key: 'UPDATE_GROUP',
        variant: 'success',
        message: 'Group added succesfully',
    };
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/user/deleteuser', function (req, res) {

    let data = {
        key: 'UPDATE_PREF',
        variant: 'success',
        message: 'Email preferences deleted succesfully',
    };
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/user/navs', function (req, res) {

    let data = req.body.serviceKey ? navs : {
        "defalultLandingLink": "/services", "navigations":
            [
                {
                    id: 'aquilaServices', name: 'Aquila Services', link: '/services', icon: 'aquilaService', page: 'ComponentsPage', linkedeUrlParam: 'nodeIndex', isHawkUI: true, className: 'admin-icon',
                },
                { id: 'startup', "name": "Startup/shutdown", "link": "/schedule", "icon": "SendIcon", "isSetting": false, "page": "Schedule", "role": "ROOT_ADMIN,ADMIN,POWER_USER" }, { "link": "/detail/:id", "page": "DetailView" }, { "link": "/drill", "page": "DetailView" }, { "link": "/login", "page": "Login" }, { "link": "/register", "page": "RegisterPage" }]
    };
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});




app.post('/api/user/environment/environmentlist', function (req, res) {

    let data = [
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
            "costMtm": 12323935.91,
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

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/user/environment/environmentstatus', function (req, res) {

    let data = { "status": true };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/user/environment/typelist', function (req, res) {

    let data = [{ "name": "Amazon AWS", "key": "AWS", "selected": false }, { "name": "KUBERNETES", "key": "KUBERNETES", "selected": true }];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/user/environment/connectionparamlist2', function (req, res) {

    let data = [{ "name": "ARN List", "key": "AWS_ARN", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Bucket Name", "key": "BILLING_BUCKET_NAME", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Bucket Region", "key": "BILLING_BUCKET_REGION", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Report Prefix", "key": "BILLING_REPORT_PREFIX", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }, { "name": "Billing Report Name", "key": "BILLING_REPORT_NAME", "selected": true, "appearDefault": true, "defaultValues": { "v1": null, "v2": null, "str1": "" } }];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/user/environment/connectionparamlist', function (req, res) {

    let data = [
        {
            "name": "User Name",
            "key": "KUBERNETES_USER_NAME",
            "selected": true,
            "appearDefault": true,
            "defaultValues": {
                "v1": null,
                "v2": null,
                "str1": "user name"
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
                "str1": "password@420"
            },
            validation: {
                isRequired: true,
                message: 'Password should be atleast 6 digit and combination of symbol, upper and lower case letters',
                type: 'password',
            },
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
            },
            validation: {
                isRequired: true,
                message: 'Incorrect URL',
                type: 'url',
            },
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

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/user/threshold/thresholdlist', function (req, res) {

    let data = [
        { email: 'i.am.test.user@gmail.com', billing: true, utilization: true, action: false, kubernetes: true, },
        { email: 'a2i.user@hotmail.com', billing: false, utilization: true, action: true, kubernetes: true, },
        { email: 'power.admin@global.in', billing: true, utilization: true, action: true, kubernetes: true, },
        { email: 'admin.user@yahoo.in', billing: true, utilization: true, action: false, kubernetes: false, },
        { email: 'chain.clouds@global.com', billing: true, utilization: false, action: true, kubernetes: false, },
        { email: 'acq.123@gmail.com', billing: false, utilization: false, action: true, kubernetes: false, },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/action/grouptypes', function (req, res) {

    let data = [
        { "name": "Tags", "key": "TAGS", "defaultValues": { "v1": 'test' }, "appearDefault": true },
        { "name": "Regions", "key": "REGIONS", "defaultValues": { "v1": '10', } },
        { "name": "Availability Zones", "key": "AVAIL_ZONES", "defaultValues": { "v1": 40, } },
        { "name": "VPCs", "key": "VPC", "defaultValues": { "v1": '500', }, "appearDefault": true },
        { "name": "OS Types", "key": "OS_TYPE", "defaultValues": { "v1": '8000', } },
        { "name": "Instance Types", "key": "INST_TYPES", "defaultValues": { "v1": '20', } },
        { "name": "Instance Status", "key": "INST_STATUS", "defaultValues": { "v1": '20', } },
    ];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});



app.post('/api/billing/aggregatedcost', function (req, res) {

    let data = { "name": null, "value": 10660.67838084227, "graphData": [{ "date": "2019-01-02", "value": 51.16 }, { "date": "2019-01-03", "value": 51.01 }, { "date": "2019-01-04", "value": 49.46 }, { "date": "2019-01-05", "value": 49.84 }, { "date": "2019-01-06", "value": 49.86 }, { "date": "2019-01-07", "value": 50.23 }, { "date": "2019-01-08", "value": 48.05 }, { "date": "2019-01-09", "value": 48.53 }, { "date": "2019-01-10", "value": 49.87 }, { "date": "2019-01-11", "value": 49.56 }, { "date": "2019-01-12", "value": 49.48 }, { "date": "2019-01-13", "value": 49.51 }, { "date": "2019-01-14", "value": 49.28 }, { "date": "2019-01-15", "value": 50.96 }, { "date": "2019-01-16", "value": 51.52 }, { "date": "2019-01-17", "value": 51.29 }, { "date": "2019-01-18", "value": 51.01 }, { "date": "2019-01-19", "value": 50.98 }, { "date": "2019-01-20", "value": 50.57 }, { "date": "2019-01-21", "value": 50.44 }, { "date": "2019-01-22", "value": 50.86 }, { "date": "2019-01-23", "value": 53.11 }, { "date": "2019-01-24", "value": 53.12 }, { "date": "2019-01-25", "value": 51.69 }, { "date": "2019-01-26", "value": 51.52 }, { "date": "2019-01-27", "value": 51.53 }, { "date": "2019-01-28", "value": 51.39 }, { "date": "2019-01-29", "value": 51.25 }, { "date": "2019-01-30", "value": 52.97 }, { "date": "2019-01-31", "value": 53.11 }, { "date": "2019-02-01", "value": 56.05 }, { "date": "2019-02-02", "value": 53.73 }, { "date": "2019-02-03", "value": 53.73 }, { "date": "2019-02-04", "value": 53.77 }, { "date": "2019-02-05", "value": 55.92 }, { "date": "2019-02-06", "value": 58.23 }, { "date": "2019-02-07", "value": 60.32 }, { "date": "2019-02-08", "value": 60.52 }, { "date": "2019-02-09", "value": 62.22 }, { "date": "2019-02-10", "value": 59.05 }, { "date": "2019-02-11", "value": 60.87 }, { "date": "2019-02-12", "value": 62.62 }, { "date": "2019-02-13", "value": 62.3 }, { "date": "2019-02-14", "value": 66.31 }, { "date": "2019-02-15", "value": 69.31 }, { "date": "2019-02-16", "value": 69.96 }, { "date": "2019-02-17", "value": 68.43 }, { "date": "2019-02-18", "value": 60.46 }, { "date": "2019-02-19", "value": 51.96 }, { "date": "2019-02-20", "value": 51.98 }, { "date": "2019-02-21", "value": 52.19 }, { "date": "2019-02-22", "value": 52.88 }, { "date": "2019-02-23", "value": 54.47 }, { "date": "2019-02-24", "value": 55.18 }, { "date": "2019-02-25", "value": 54.2 }, { "date": "2019-02-26", "value": 58.65 }, { "date": "2019-02-27", "value": 54.91 }, { "date": "2019-02-28", "value": 54.25 }, { "date": "2019-03-01", "value": 51.77 }, { "date": "2019-03-02", "value": 45.2 }, { "date": "2019-03-03", "value": 44.84 }, { "date": "2019-03-04", "value": 46.16 }, { "date": "2019-03-05", "value": 47.34 }, { "date": "2019-03-06", "value": 45.88 }, { "date": "2019-03-07", "value": 46.59 }, { "date": "2019-03-08", "value": 47.0 }, { "date": "2019-03-09", "value": 47.5 }, { "date": "2019-03-10", "value": 46.54 }, { "date": "2019-03-11", "value": 55.41 }, { "date": "2019-03-12", "value": 58.82 }, { "date": "2019-03-13", "value": 53.04 }, { "date": "2019-03-14", "value": 52.6 }, { "date": "2019-03-15", "value": 52.35 }, { "date": "2019-03-16", "value": 50.32 }, { "date": "2019-03-17", "value": 45.87 }, { "date": "2019-03-18", "value": 47.65 }, { "date": "2019-03-19", "value": 47.62 }, { "date": "2019-03-20", "value": 47.59 }, { "date": "2019-03-21", "value": 47.69 }, { "date": "2019-03-22", "value": 47.57 }, { "date": "2019-03-23", "value": 47.78 }, { "date": "2019-03-24", "value": 45.41 }, { "date": "2019-03-25", "value": 48.67 }, { "date": "2019-03-26", "value": 47.86 }, { "date": "2019-03-27", "value": 47.84 }, { "date": "2019-03-28", "value": 48.25 }, { "date": "2019-03-29", "value": 47.63 }, { "date": "2019-03-30", "value": 45.62 }, { "date": "2019-03-31", "value": 44.99 }, { "date": "2019-04-01", "value": 59.58 }, { "date": "2019-04-02", "value": 62.75 }, { "date": "2019-04-03", "value": 68.09 }, { "date": "2019-04-04", "value": 70.1 }, { "date": "2019-04-05", "value": 70.61 }, { "date": "2019-04-06", "value": 68.43 }, { "date": "2019-04-07", "value": 68.21 }, { "date": "2019-04-08", "value": 71.01 }, { "date": "2019-04-09", "value": 71.69 }, { "date": "2019-04-10", "value": 75.67 }, { "date": "2019-04-11", "value": 78.63 }, { "date": "2019-04-12", "value": 81.17 }, { "date": "2019-04-13", "value": 77.71 }, { "date": "2019-04-14", "value": 76.78 }, { "date": "2019-04-15", "value": 78.75 }, { "date": "2019-04-16", "value": 78.66 }, { "date": "2019-04-17", "value": 79.36 }, { "date": "2019-04-18", "value": 79.4 }, { "date": "2019-04-19", "value": 79.37 }, { "date": "2019-04-20", "value": 77.3 }, { "date": "2019-04-21", "value": 76.8 }, { "date": "2019-04-22", "value": 78.17 }, { "date": "2019-04-23", "value": 67.24 }, { "date": "2019-04-24", "value": 53.26 }, { "date": "2019-04-25", "value": 51.37 }, { "date": "2019-04-26", "value": 49.68 }, { "date": "2019-04-27", "value": 47.81 }, { "date": "2019-04-28", "value": 47.77 }, { "date": "2019-04-29", "value": 60.43 }, { "date": "2019-04-30", "value": 59.11 }, { "date": "2019-05-01", "value": 42.14 }, { "date": "2019-05-02", "value": 59.58 }, { "date": "2019-05-03", "value": 63.69 }, { "date": "2019-05-04", "value": 62.14 }, { "date": "2019-05-05", "value": 54.32 }, { "date": "2019-05-06", "value": 55.44 }, { "date": "2019-05-07", "value": 65.71 }, { "date": "2019-05-08", "value": 65.45 }, { "date": "2019-05-09", "value": 77.08 }, { "date": "2019-05-10", "value": 72.44 }, { "date": "2019-05-11", "value": 87.72 }, { "date": "2019-05-12", "value": 88.27 }, { "date": "2019-05-13", "value": 89.34 }, { "date": "2019-05-14", "value": 85.92 }, { "date": "2019-05-15", "value": 86.7 }, { "date": "2019-05-16", "value": 86.65 }, { "date": "2019-05-17", "value": 85.55 }, { "date": "2019-05-18", "value": 84.76 }, { "date": "2019-05-19", "value": 84.35 }, { "date": "2019-05-20", "value": 86.46 }, { "date": "2019-05-21", "value": 86.48 }, { "date": "2019-05-22", "value": 85.98 }, { "date": "2019-05-23", "value": 86.98 }, { "date": "2019-05-24", "value": 85.95 }, { "date": "2019-05-25", "value": 86.66 }, { "date": "2019-05-26", "value": 84.76 }, { "date": "2019-05-27", "value": 89.38 }, { "date": "2019-05-28", "value": 89.92 }, { "date": "2019-05-29", "value": 88.66 }, { "date": "2019-05-30", "value": 88.98 }, { "date": "2019-05-31", "value": 79.08 }, { "date": "2019-06-01", "value": 76.02 }, { "date": "2019-06-02", "value": 70.08 }, { "date": "2019-06-03", "value": 71.26 }, { "date": "2019-06-04", "value": 70.41 }, { "date": "2019-06-05", "value": 70.32 }, { "date": "2019-06-06", "value": 68.87 }, { "date": "2019-06-07", "value": 68.6 }, { "date": "2019-06-08", "value": 64.48 }, { "date": "2019-06-09", "value": 64.17 }, { "date": "2019-06-10", "value": 72.81 }, { "date": "2019-06-11", "value": 76.03 }, { "date": "2019-06-12", "value": 72.28 }, { "date": "2019-06-13", "value": 67.97 }, { "date": "2019-06-14", "value": 70.92 }, { "date": "2019-06-15", "value": 69.57 }, { "date": "2019-06-16", "value": 64.46 }, { "date": "2019-06-17", "value": 67.06 }, { "date": "2019-06-18", "value": 65.72 }, { "date": "2019-06-19", "value": 78.44 }, { "date": "2019-06-20", "value": 80.88 }, { "date": "2019-06-21", "value": 75.38 }, { "date": "2019-06-22", "value": 16.48 }] };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/instances/aggregatehistogrammetrics', function (req, res) {

    let data = [{ "name": "0-10", "CPU": 34, "Memory": 31 }, { "name": "10-20", "CPU": 3, "Memory": 1 }, { "name": "20-30", "CPU": 1, "Memory": 1 }, { "name": "30-40", "CPU": 1, "Memory": 2 }, { "name": "40-50", "CPU": 0, "Memory": 2 }, { "name": "50-60", "CPU": 0, "Memory": 1 }, { "name": "60-70", "CPU": 0, "Memory": 1 }, { "name": "70-80", "CPU": 0, "Memory": 0 }, { "name": "80-90", "CPU": 0, "Memory": 0 }, { "name": "90+", "CPU": 1, "Memory": 1 }];

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/registration/checktokenexists', function (req, res) {

    let data = { status: "true" };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/column/update', function (req, res) {

    let data = { status: "true" };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/cloud-providers', function (req, res) {
    console.log('auth: ', req.headers.authorization);


    let data = {
        'cloudProviders': [
            { name: 'AWS', key: 'aws', icon: 'amazon' },
            { name: 'GCP', key: 'gcp', icon: 'google' },
            { name: 'Azure', key: 'azure', icon: 'dropbox' }
        ]
    };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });

    res.status(200).send(data);

});


app.post('/api/auth/auth-entity', function (req, res) {

    // For KeyCloak use: http://localhost:8081/auth/realms/master/protocol/openid-connect/auth?response_type=code&client_id=test&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi/auth/keycloak-exchange-token&state=022d48a0-1394-42c6-93f8-c575a1e09fbe&login=true&scope=openid

    let data = {
        type: 'LOCAL',
        authUrl: `https://dev-747839.okta.com/oauth2/default/v1/authorize?client_id=0oa1r9u7oni7kCn08357&response_type=id_token&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A9000&state=state-296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601&nonce=foo&login_hint=${req.body.email}`,
    };

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});

app.post('/api/auth/exchange-token', function (req, res) {
    const data =
    {
        'authToken': 'eye.Refresh.OiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgT2t0YSIsImlhdCI6MTUxNjIzOTAyMn0.o7Xd3bWYtjTFUVBLSOVWLSWS03rOxd8zXJJrQtYPDqA',
        'tokenExpiration': Math.floor(Date.now() / 1000) + 60,
        'refreshToken': 'this-is-local-refresh-token',
        'userId': '999',
        'firstName': 'Harry',
        'lastName': 'Smith',
        'accountNumber': '89861328498',
        'email': 'business.user.213@gmail.com',
        'accountType': 'PRO',
        "roles": "ROOT_ADMIN",
        "environmentSelection": false,
        "envList": ['1', '2'],
    };
    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(200).send(data);
});


app.post('/api/auth/refresh-token', function (req, res) {
    const data =
    {
        'authToken': 'eye.Refresh.OiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgT2t0YSIsImlhdCI6MTUxNjIzOTAyMn0.o7Xd3bWYtjTFUVBLSOVWLSWS03rOxd8zXJJrQtYPDqA',
        'tokenExpiration': Math.floor(Date.now() / 1000) + 900,
        'refreshToken': 'this-is-local-refresh-token',
        'userId': '999',
        'firstName': 'Harry',
        'lastName': 'Smith',
        'accountNumber': '89861328498',
        'email': 'business.user.213@gmail.com',
        'accountType': 'LITE',
        "roles": "EDITOR",
        "environmentSelection": false,
        "envList": ['1', '2', '3', '4', '5'],
    }
    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/cloud-connections', function (req, res) {
    const data =
        [
            {
                "appearDefault": true,
                "defaultValues": { 'd1': "us-east", 'd2': "west-45654", 'd3': "t5.large", 'v1': '10', 'v2': '20', },
            },
            {
                "appearDefault": true,
                "defaultValues": { 'd1': "us-central", 'd2': "west-2132", 'd3': "t5.small", 'v1': '30', 'v2': '40' },
            },
            {
                "appearDefault": true,
                "defaultValues": { 'd1': "us-north", 'd2': "west-7645", 'd3': "t5.medium", 'v1': '50', 'v2': '60', },
            },
        ]
    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});


app.post('/api/csp/customers', function (req, res) {
    const data = [{ "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "companyName": "DOAGOM (ATMA)", "domain": "DOAGOM.onmicrosoft.com", "subscriptionCount": 8 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "f92ba573-65dc-4d23-920a-89179cc32668", "companyName": "Servion", "domain": "servion.onmicrosoft.com", "subscriptionCount": 6 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "0336464a-c425-408c-a568-15c3416a24b8", "companyName": "Max Healthcare Institute Ltd", "domain": "MaxHealthcareInstituteL.onmicrosoft.com", "subscriptionCount": 5 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "d6b4b447-7721-47a6-a67d-c41e7624bc14", "companyName": "BCT Consulting Pvt. Ltd", "domain": "bctconsultingindia.onmicrosoft.com", "subscriptionCount": 5 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "0632aefb-7e51-4308-a170-4eb69380b706", "companyName": "ISGEC Heavy Engineering Limited", "domain": "isgecfw.com", "subscriptionCount": 4 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "30798b3a-e358-4f4f-9414-529ce291627b", "companyName": "Sify AIS2 Azure", "domain": "sifyais2.onmicrosoft.com", "subscriptionCount": 4 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "ff2f6a94-f828-45f7-8ff5-86f2441ad15c", "companyName": "Insurance Information Bureau Of India", "domain": "iiboi.onmicrosoft.com", "subscriptionCount": 3 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "423d44a8-0004-4c25-8ae8-f69f14afbad8", "companyName": "Goltens India Pvt Ltd", "domain": "goltens.onmicrosoft.com", "subscriptionCount": 3 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "aefe51b0-2009-4c72-987d-03988faf99d6", "companyName": "Indian Institute of Astrophysics", "domain": "itmtiiap.onmicrosoft.com", "subscriptionCount": 3 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "9fb7f5de-057b-4b00-b650-143febd38178", "companyName": "OnProcess Technology India Pvt Ltd", "domain": "OPTIndia.onmicrosoft.com", "subscriptionCount": 3 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "1775da10-eb53-4c45-9248-7ccb96c2b22b", "companyName": "JMT AUTO LTD", "domain": "JmtautoIndia.onmicrosoft.com", "subscriptionCount": 3 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "06abe061-90f9-4146-a042-44526d16cf6f", "companyName": "HarshRoongta.com", "domain": "harshroongta.onmicrosoft.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "2b385a20-90f8-44b9-a5fa-d5db68c336c8", "companyName": "Bangalore Baptist Hospital", "domain": "bbhin.onmicrosoft.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "6f2aecdd-87bf-4682-b47d-6d01f9718cf5", "companyName": "Calyx Spaces LLP", "domain": "calyxgroupllp.onmicrosoft.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "0951bc8d-d7bc-40d0-9668-9119a55ad78c", "companyName": "Advent Global Solutions Ltd.", "domain": "adventglobal.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "8bb87ac6-0fc6-4ed0-b080-d28833a09ebb", "companyName": "Abdos Lamitubes Private Limited", "domain": "abdosindia.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "e3ea4141-2678-4a2c-8af0-996c385d004e", "companyName": "Intellect Design Arena Limited", "domain": "Intellectdesignarena.onmicrosoft.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "d42e2961-bb47-4d71-bcc2-535fb99917ca", "companyName": "Baazar Retail Ltd.", "domain": "baazarkolkata.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "9afff424-8480-46bb-85b2-ae981fdb1cff", "companyName": "Vishal Megamart", "domain": "VishalMegamartIn.onmicrosoft.com", "subscriptionCount": 2 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "f741ba45-5916-44ea-93f1-936f94303831", "companyName": "SifyBLRAzureStack", "domain": "SifyBLRAzureStack.onmicrosoft.com", "subscriptionCount": 2 }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/customer/approvedratecardlist', function (req, res) {
    const data = [{ "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard SSD Managed Disks", "name": "Disk Operations", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 0.1349, "effectiveDate": "2019-12-26T10:21:38.639", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Virtual Machines", "subCategory": "BS Series Windows", "name": "B8ms", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 35.799, "effectiveDate": "2019-12-26T10:21:38.638", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard HDD Managed Disks", "name": "LRS Snapshots", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 3.3709, "effectiveDate": "2019-12-26T10:21:38.64", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Virtual Machines", "subCategory": "BS Series", "name": "B2s", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 3.9776, "effectiveDate": "2019-12-26T10:21:38.638", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard Page Blob", "name": "Disk Read Operations", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 0.0242, "effectiveDate": "2019-12-26T10:21:38.641", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Tables", "name": "LRS Data Stored", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 3.3372, "effectiveDate": "2019-12-26T10:21:38.642", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "General Block Blob", "name": "Read Operations", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 0.0242, "effectiveDate": "2019-12-26T10:21:38.64", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard SSD Managed Disks", "name": "E6 Disks", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 355.968, "effectiveDate": "2019-12-26T10:21:38.638", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Virtual Machines Licenses", "subCategory": "RHEL for SAP HANA", "name": "4 vCPU VM License", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 4.759, "effectiveDate": "2019-12-26T10:21:38.638", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard HDD Managed Disks", "name": "S6 Disks", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 223.0733, "effectiveDate": "2019-12-26T10:21:38.639", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Virtual Machines", "subCategory": "F/FS Series", "name": "F4/F4s", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 14.7646, "effectiveDate": "2019-12-26T10:21:38.638", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard Page Blob", "name": "LRS Write Operations", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 0.0242, "effectiveDate": "2019-12-26T10:21:38.64", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Virtual Machines Licenses", "subCategory": "Red Hat Enterprise Linux", "name": "1-4 vCPU VM License", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 4.0451, "effectiveDate": "2019-12-26T10:21:38.638", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard HDD Managed Disks", "name": "S4 Disks", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 113.9098, "effectiveDate": "2019-12-26T10:21:38.639", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Virtual Network", "subCategory": "Global Peering", "name": "Ingress", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 6.0677, "effectiveDate": "2019-12-26T10:21:38.643", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Tables", "name": "Read Operations", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 0.0242, "effectiveDate": "2019-12-26T10:21:38.643", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Storage", "subCategory": "Standard SSD Managed Disks", "name": "E40 Disks", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 10355.4317, "effectiveDate": "2019-12-26T10:21:38.638", "status": true }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "region": "Any", "meterId": "Any", "category": "Virtual Network", "subCategory": "IP Addresses", "name": "Static Public IP", "packName": "Default", "count": 1, "currency": "INR", "interval": "Default", "unitRate": 0.2428, "effectiveDate": "2019-12-26T10:21:38.639", "status": true }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});


app.post('/api/csp/customer/subscriptions', function (req, res) {
    const data = [{ "id": "5feaee19-f8bc-4e00-85b5-0e9fb8f74825", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-12-09T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "active", "billingCycle": "monthly", "termDuration": "P1Y" }, { "id": "1c3a7483-f3fe-4553-afb8-cc169002f114", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-04-25T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "active", "billingCycle": "monthly", "termDuration": "P1Y" }, { "id": "248644f5-5d49-4089-a9b1-cc678b6f3c22", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-04-25T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "deleted", "billingCycle": "monthly", "termDuration": "P1Y" }, { "id": "2c8f50c0-075c-405f-94d3-01038eb7d6e8", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-04-25T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "active", "billingCycle": "monthly", "termDuration": "P1Y" }, { "id": "62379adc-124b-4f58-8739-60160bb0dadc", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-04-25T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "active", "billingCycle": "monthly", "termDuration": "P1Y" }, { "id": "957cf25f-d430-452f-a31c-05f84e6a1e70", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-04-25T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "active", "billingCycle": "monthly", "termDuration": "P1Y" }, { "id": "1c161303-a6be-4b7e-bd95-bc8ba298b694", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-04-25T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "active", "billingCycle": "monthly", "termDuration": "P1Y" }, { "id": "d2e7061b-5b71-4911-8b1b-1929a2378222", "offerId": "MS-AZR-0145P", "offerName": "Microsoft Azure", "friendlyName": null, "quantity": 1, "effectiveStartDate": "2019-03-28T00:00:00.000+0000", "commitmentEndDate": "9999-12-14T00:00:00.000+0000", "status": "active", "billingCycle": "monthly", "termDuration": "P1Y" }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/customer/subscriptions', function (req, res) {
    const data = [];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/customer/mothlybilllineitems', function (req, res) {
    const data = [{ "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "62379adc-124b-4f58-8739-60160bb0dadc", "region": "", "category": "Virtual Machines", "subCategory": "Dv3/DSv3 Series", "name": "D4 v3/D4s v3", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 16.5848, "effectiveRate": null, "cspSharedRate": 13.8207, "vcore": null, "vcpu": 4.0, "memory": 16.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 1439.8834, "actualCost": 23880.18, "cspCost": 19900.23, "samples": 64, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c3a7483-f3fe-4553-afb8-cc169002f114", "region": "", "category": "Virtual Machines", "subCategory": "F/FS Series", "name": "F4/F4s", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 14.7646, "effectiveRate": null, "cspSharedRate": 12.3038, "vcore": null, "vcpu": 4.0, "memory": 8.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 1441.7334, "actualCost": 21286.62, "cspCost": 17738.82, "samples": 65, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c161303-a6be-4b7e-bd95-bc8ba298b694", "region": "", "category": "Virtual Machines", "subCategory": "BS Series Windows", "name": "B8ms", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 35.799, "effectiveRate": null, "cspSharedRate": 29.8325, "vcore": null, "vcpu": 8.0, "memory": 32.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 589.45, "actualCost": 21101.72, "cspCost": 17584.79, "samples": 29, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c161303-a6be-4b7e-bd95-bc8ba298b694", "region": "", "category": "Virtual Machines", "subCategory": "BS Series", "name": "B2ms", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 8.0227, "effectiveRate": null, "cspSharedRate": 6.6856, "vcore": null, "vcpu": 2.0, "memory": 8.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 1470.7015, "actualCost": 11799.0, "cspCost": 9832.57, "samples": 69, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c161303-a6be-4b7e-bd95-bc8ba298b694", "region": "", "category": "Storage", "subCategory": "Standard SSD Managed Disks", "name": "E40 Disks", "unit": "1/Month", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 10355.4317, "effectiveRate": null, "cspSharedRate": 8629.5264, "vcore": null, "vcpu": null, "memory": null, "diskSize": 68.272128, "maxDiskSize": 2048.0, "minDiskSize": 1024.0, "minIOPS": 500.0, "maxIOPS": 500.0, "quantity": 0.8126, "actualCost": 8414.46, "cspCost": 7012.05, "samples": 26, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c3a7483-f3fe-4553-afb8-cc169002f114", "region": "", "category": "Virtual Machines Licenses", "subCategory": "RHEL for SAP HANA", "name": "4 vCPU VM License", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 4.759, "effectiveRate": null, "cspSharedRate": 3.9658, "vcore": null, "vcpu": null, "memory": null, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 1443.7334, "actualCost": 6870.73, "cspCost": 5725.52, "samples": 66, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c161303-a6be-4b7e-bd95-bc8ba298b694", "region": "", "category": "Virtual Machines Licenses", "subCategory": "Red Hat Enterprise Linux", "name": "1-4 vCPU VM License", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 4.0451, "effectiveRate": null, "cspSharedRate": 3.3709, "vcore": null, "vcpu": null, "memory": null, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 1489.7015, "actualCost": 6025.99, "cspCost": 5021.65, "samples": 68, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "62379adc-124b-4f58-8739-60160bb0dadc", "region": "", "category": "Virtual Machines Licenses", "subCategory": "Red Hat Enterprise Linux", "name": "1-4 vCPU VM License", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 4.0451, "effectiveRate": null, "cspSharedRate": 3.3709, "vcore": null, "vcpu": null, "memory": null, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 1416.8834, "actualCost": 5731.44, "cspCost": 4776.18, "samples": 62, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c3a7483-f3fe-4553-afb8-cc169002f114", "region": "", "category": "Azure Site Recovery", "subCategory": "", "name": "VM Replicated to Azure", "unit": "1/Month", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 1685.4544, "effectiveRate": null, "cspSharedRate": 1404.5453, "vcore": null, "vcpu": null, "memory": null, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 1.9355, "actualCost": 3262.17, "cspCost": 2718.47, "samples": 30, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c3a7483-f3fe-4553-afb8-cc169002f114", "region": "", "category": "Storage", "subCategory": "Standard HDD Managed Disks", "name": "S20 Disks", "unit": "1/Month", "rateMapping": "Mapped", "resourceUri": null, "resourceName": null, "resourceGroup": null, "rate": 1613.7215, "effectiveRate": null, "cspSharedRate": 1344.7679, "vcore": null, "vcpu": null, "memory": null, "diskSize": 17.068032, "maxDiskSize": 512.0, "minDiskSize": 256.0, "minIOPS": 500.0, "maxIOPS": 500.0, "quantity": 1.9696, "actualCost": 3178.39, "cspCost": 2648.66, "samples": 67, "packName": "Default" }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/customer/mothlybillldetailineitems', function (req, res) {
    const data = [{ "startDate": "2019-12-01T00:00:00.000+0000", "endDate": "2020-01-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c161303-a6be-4b7e-bd95-bc8ba298b694", "region": "insouth", "category": "Virtual Machines", "subCategory": "BS Series Windows", "name": "B8ms", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": "/subscriptions/1c161303-a6be-4b7e-bd95-bc8ba298b694/resourceGroups/panchnama-photographs/providers/Microsoft.Compute/virtualMachines/PanchnamaVM", "resourceName": "PanchnamaVM", "resourceGroup": "panchnama-photographs", "rate": 35.799, "effectiveRate": 35.799, "cspSharedRate": 29.8325, "vcore": null, "vcpu": 8.0, "memory": 32.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 775.7502, "actualCost": 27771.08, "cspCost": 23142.6, "samples": 42, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "1c161303-a6be-4b7e-bd95-bc8ba298b694", "region": "insouth", "category": "Virtual Machines", "subCategory": "BS Series Windows", "name": "B8ms", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": "/subscriptions/1c161303-a6be-4b7e-bd95-bc8ba298b694/resourceGroups/panchnama-photographs/providers/Microsoft.Compute/virtualMachines/PanchnamaVM", "resourceName": "PanchnamaVM", "resourceGroup": "panchnama-photographs", "rate": 35.799, "effectiveRate": 35.799, "cspSharedRate": 29.8325, "vcore": null, "vcpu": 8.0, "memory": 32.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 589.45, "actualCost": 21101.72, "cspCost": 17584.79, "samples": 29, "packName": "Default" }, { "startDate": "2019-12-01T00:00:00.000+0000", "endDate": "2020-01-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "62379adc-124b-4f58-8739-60160bb0dadc", "region": "inwest", "category": "Virtual Machines", "subCategory": "Dv3/DSv3 Series", "name": "D4 v3/D4s v3", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": "/subscriptions/62379adc-124b-4f58-8739-60160bb0dadc/resourceGroups/rg-rainfall/providers/Microsoft.Compute/virtualMachines/VMRainfallApp01", "resourceName": "VMRainfallApp01", "resourceGroup": "rg-rainfall", "rate": 16.5848, "effectiveRate": 16.5848, "cspSharedRate": 13.8207, "vcore": null, "vcpu": 4.0, "memory": 16.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 776.0, "actualCost": 12869.8, "cspCost": 10724.88, "samples": 41, "packName": "Default" }, { "startDate": "2019-12-01T00:00:00.000+0000", "endDate": "2020-01-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "62379adc-124b-4f58-8739-60160bb0dadc", "region": "inwest", "category": "Virtual Machines", "subCategory": "Dv3/DSv3 Series", "name": "D4 v3/D4s v3", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": "/subscriptions/62379adc-124b-4f58-8739-60160bb0dadc/resourceGroups/rg-rainfall/providers/Microsoft.Compute/virtualMachines/VMRainfallDB01", "resourceName": "VMRainfallDB01", "resourceGroup": "rg-rainfall", "rate": 16.5848, "effectiveRate": 16.5848, "cspSharedRate": 13.8207, "vcore": null, "vcpu": 4.0, "memory": 16.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 750.0, "actualCost": 12438.6, "cspCost": 10365.54, "samples": 40, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "62379adc-124b-4f58-8739-60160bb0dadc", "region": "inwest", "category": "Virtual Machines", "subCategory": "Dv3/DSv3 Series", "name": "D4 v3/D4s v3", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": "/subscriptions/62379adc-124b-4f58-8739-60160bb0dadc/resourceGroups/rg-rainfall/providers/Microsoft.Compute/virtualMachines/VMRainfallApp01", "resourceName": "VMRainfallApp01", "resourceGroup": "rg-rainfall", "rate": 16.5848, "effectiveRate": 16.5848, "cspSharedRate": 13.8207, "vcore": null, "vcpu": 4.0, "memory": 16.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 721.9334, "actualCost": 11973.12, "cspCost": 9977.64, "samples": 33, "packName": "Default" }, { "startDate": "2019-11-01T00:00:00.000+0000", "endDate": "2019-12-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "62379adc-124b-4f58-8739-60160bb0dadc", "region": "inwest", "category": "Virtual Machines", "subCategory": "Dv3/DSv3 Series", "name": "D4 v3/D4s v3", "unit": "1 Hour", "rateMapping": "Mapped", "resourceUri": "/subscriptions/62379adc-124b-4f58-8739-60160bb0dadc/resourceGroups/rg-rainfall/providers/Microsoft.Compute/virtualMachines/VMRainfallDB01", "resourceName": "VMRainfallDB01", "resourceGroup": "rg-rainfall", "rate": 16.5848, "effectiveRate": 16.5848, "cspSharedRate": 13.8207, "vcore": null, "vcpu": 4.0, "memory": 16.0, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 717.95, "actualCost": 11907.06, "cspCost": 9922.59, "samples": 31, "packName": "Default" }, { "startDate": "2019-12-01T00:00:00.000+0000", "endDate": "2020-01-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "5feaee19-f8bc-4e00-85b5-0e9fb8f74825", "region": "inwest", "category": "Bandwidth", "subCategory": "", "name": "Data Transfer In", "unit": "1 GB", "rateMapping": "Mapped", "resourceUri": "/subscriptions/5feaee19-f8bc-4e00-85b5-0e9fb8f74825/resourceGroups/vm-agri-db01/providers/Microsoft.Compute/virtualMachines/VM-Agri-DB01", "resourceName": "VM-Agri-DB01", "resourceGroup": "vm-agri-db01", "rate": 0.0, "effectiveRate": 0.0, "cspSharedRate": 0.0, "vcore": null, "vcpu": null, "memory": null, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 0.0276, "actualCost": 0.0, "cspCost": 0.0, "samples": 18, "packName": "Default" }, { "startDate": "2019-12-01T00:00:00.000+0000", "endDate": "2020-01-01T00:00:00.000+0000", "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "customerId": "35be91be-97a3-4d0f-8a62-6ad7a9f2c3a8", "subscriptionId": "62379adc-124b-4f58-8739-60160bb0dadc", "region": "inwest", "category": "Bandwidth", "subCategory": "", "name": "Data Transfer In", "unit": "1 GB", "rateMapping": "Mapped", "resourceUri": "/subscriptions/62379adc-124b-4f58-8739-60160bb0dadc/resourceGroups/rg-rainfall/providers/Microsoft.Compute/virtualMachines/VMRainfallApp01", "resourceName": "VMRainfallApp01", "resourceGroup": "rg-rainfall", "rate": 0.0, "effectiveRate": 0.0, "cspSharedRate": 0.0, "vcore": null, "vcpu": null, "memory": null, "diskSize": null, "maxDiskSize": null, "minDiskSize": null, "minIOPS": null, "maxIOPS": null, "quantity": 0.7959, "actualCost": 0.0, "cspCost": 0.0, "samples": 41, "packName": "Default" }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/customer/ratepacks', function (req, res) {
    const data = [{ "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "packName": "SQL Rate Pack", "createdDate": "2019-12-26T12:54:12.266", "updatedDate": "2019-12-26T12:54:12.266", "version": 0, "rate": 50.0 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "packName": "Test Rate", "createdDate": "2019-12-26T13:43:05.992", "updatedDate": "2019-12-26T13:43:05.992", "version": 0, "rate": 100.0 }, { "tenantId": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5", "packName": "TestPack2", "createdDate": "2019-12-27T05:45:58.141", "updatedDate": "2019-12-27T05:45:58.141", "version": 0, "rate": 11.0 }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/customer/orgdetail', function (req, res) {
    const data = {
        "INDUSTRY_VERTICAL": "lorem ipusm",
        "website": "lorem ipusm",
        "business_turnover": "lorem ipusm",
        "account_type": "lorem ipusm",
        "existing_customer": "No",
        "addr_1": "Address line 1",
        "addr_2": "Address line 2",
        "addr_3": "City, State, Zip",
        "email": "email@test.com",
        "spoc_details": "lorem ipusm"
    }

    setResponseHeaders(res);
    res.status(200).send(data);

});

app.post('/api/csp/customer/alert', function (req, res) {
    const data = [{
        key: 'alert1',
        headerColor: '#D34A46',
        title: 'Alerts',
        type: 'list',
        showViewMore: true,
        alertCount: 4,
        noDataText: 'No alerts!',
        alertData: [
            'Only 1 month DR service mapped',
            'Bill generation due 4/2/2020',
            'Bill generation due 4/3/2020',
            'Bill generation due 4/5/2020'
        ],
        alertDataList: [
            'Only 1 month DR service mapped',
            'Bill generation due 4/2/2020',
            'Bill generation due 4/3/2020',
            'Bill generation due 4/5/2020'
        ],
    }];

    setResponseHeaders(res);
    res.status(200).send(data);
})

app.post('/api/csp/customer/notification', function (req, res) {
    const data = [{
        key: 'alert2',
        headerColor: '#FF9D00',
        title: 'Notifications',
        type: 'list',
        showViewMore: true,
        alertCount: 1,
        noDataText: 'No notifications!',
        alertData: [
            'Seasonal rate for Rate Card #1 activated',
        ],
        alertDataList: [],
    }];
    setResponseHeaders(res);
    res.status(200).send(data);
})

app.post("/api/csp/customer/users", function (req, res) {
    const data = [{
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }, {
        "firstName": "Anna",
        "lastName": "Reddington",
        "fullName": "Anna Reddington",
        "company": "companyname",
        "position": "VP of Cloud Operations"
    }];

    setResponseHeaders(res);
    res.status(200).send(data);

})

app.post("/api/csp/customer/settings", function (req, res) {
    const data = {
        "links": [
            {
                "title": "Configuration",
                "link": "/csp/overview"
            },
            {
                "title": "Alerts",
                "link": "/csp/overview"
            },
            {
                "title": "Messages",
                "link": "/csp/overview"
            }],
        "groups": [
            {
                "title": "GroupA",
                "link": "/csp/overview"
            },
            {
                "title": "East Region group",
                "link": "/csp/overview"
            }
        ]
    };

    setResponseHeaders(res);
    res.status(200).send(data);
})

app.post("/api/csp/customer/contact", function (req, res) {
    data = [
        { userID: "blah@user", id: 1, firstName: "name", emailId: "hell@test.com", lastName: 'Lagos', designation: 'stage-1' },
        { userID: "blah@user", id: 2, firstName: "name", emailId: "hell@test.com", lastName: 'Anambra', designation: 'stage-4' },
        { userID: "blah@user", id: 3, firstName: "name", emailId: "hell@test.com", lastName: 'Abuja', designation: 'stage-2' },
        { userID: "blah@user", id: 4, firstName: "name", emailId: "hell@test.com", lastName: 'Jos', designation: 'stage-3' },
        { userID: "blah@user", id: 5, firstName: "name", emailId: "hell@test.com", lastName: 'Lagos', designation: 'stage-4' },
        { userID: "blah@user", id: 6, firstName: "name", emailId: "hell@test.com", lastName: 'PortHarcourt', designation: 'stage-1' }
    ];

    setResponseHeaders(res);
    res.status(200).send(data);
})


app.post("/api/info-graph", function (req, res) {
    data = infoGraph;
    setResponseHeaders(res);
    res.status(200).send(data);
})


app.post("/api/csp/customer/cloudaccounts", function (req, res) {
    const data = [
        {
            "key": "Azure",
            "icon": "azure",
            "label": "Azure",
            "values": [
                {
                    "name": "Microsoft Azure",
                    "value": 10
                },
                {
                    "name": "Microsoft Azure Stack",
                    "value": 10
                }
            ]
        },
        {
            "key": "AWS",
            "icon": "aws",
            "values": [
                {
                    "name": "Accounts",
                    "value": 10
                }
            ]
        }, {
            "key": "Azure",
            "icon": "azure",
            "label": "Azure",
            "values": [
                {
                    "name": "Microsoft Azure",
                    "value": 10
                },
                {
                    "name": "Microsoft Azure Stack",
                    "value": 10
                }
            ]
        }, {
            "key": "Azure",
            "icon": "azure",
            "label": "Azure",
            "values": [
                {
                    "name": "Microsoft Azure",
                    "value": 10
                },
                {
                    "name": "Microsoft Azure Stack",
                    "value": 10
                }
            ]
        }
    ]
    setResponseHeaders(res);
    res.status(200).send(data);

})

app.post('/api/auth/environmentlist', function (req, res) {

    const data = [
        {
            "key": "abc",
            'name': 'Ten-abc',
        },
        {
            "key": "xyz",
            'name': 'Ten-xyz',
            selected: true
        },
        {
            "key": "iop",
            'name': 'Ten-iop',
        },
        {
            "key": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5",
            'name': "dd2af4ea",
        }
    ];
    responseStatus = 200;
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/auth/authlist', function (req, res) {

    const data = [
        {
            "key": "local",
            'name': 'LOCAL',
            // selected: true
        },
        {
            "key": "okta",
            'name': 'OKTA',
        },
    ];
    responseStatus = 200;
    setResponseHeaders(res);
    res.status(responseStatus).send(data);
});

app.post('/api/user/cloudServiceList', function (req, res) {

    const data = [
        {
            "key": "azure",
            'name': 'Azure',
            // selected: true
        },
        {
            "key": "aws",
            'name': 'AWS',
        },
        {
            "key": "gcp",
            'name': 'GCP',
        },
        {
            "key": "cld1",
            'name': 'Cloud 1',
        },
        {
            "key": "cld2",
            'name': 'Cloud 2',
        },
        {
            "key": "cld3",
            'name': 'Cloud 3',
        },
    ];
    responseStatus = 200;
    setResponseHeaders(res);
    res.status(responseStatus).send(data);
});

app.post('/api/csp/tenants/fetchtenants', function (req, res) {

    //for (let index = 0; index < 999999999; index++) { }

    const data = [
        {
            "key": "abc",
            'name': 'Ten-abc',
        },
        {
            "key": "xyz",
            'name': 'Ten-xyz',
            selected: true
        },
        {
            "key": "iop",
            'name': 'Ten-iop',
        },
        {
            "key": "dd2af4ea-2053-43da-ab8c-b29fc6488fa5",
            'name': "dd2af4ea",
        }

    ];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});


app.post('/api/explorer/cost-flow', function (req, res) {

    const data = [
        {
            "key": "cp",
            'name': 'Cloud Providers',
            selected: false
        },
        {
            "key": "resType",
            'name': 'Resource Type',
            selected: true
        },
        {
            "key": "regions",
            'name': 'Regions',
            selected: false

        },
        {
            "key": "OS",
            'name': "Operating Systems",
            selected: true
        }
        ,
        {
            "key": "k8",
            'name': "Kubernetes",
            selected: true
        }
    ];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});


app.post('/api/explorer/remove/cost-flow', function (req, res) {

    const data = {}
    responseStatus = 200;
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/billing-cycles', function (req, res) {

    const data = [
        {
            "key": "03-2019",
            'name': 'Mar-2019'
        },
        {
            "key": "04-2019",
            'name': 'Apr-2019',
            selected: true
        },
        {
            "key": "05-2019",
            'name': 'May-2019'
        },
        {
            "key": "06-2019",
            'name': 'June-2019'
        },
        {
            "key": "07-2019",
            'name': 'July-2019'
        },
        {
            "key": "08-2019",
            'name': 'Aug-2019'
        },
    ];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/azurestack/fetchprovidersubscription', function (req, res) {

    // for (let index = 0; index < 999999999; index++) { }

    const data = [
        {
            "key": "S-1",
            'name': "Sub-1",
            selected: true
        },
        {
            "key": "S-2",
            'name': "Sub-2",
        },
        {
            "key": "S-3",
            'name': "Sub-3",
            // selected: true
        },
        {
            "key": "S-4",
            'name': "Sub-4",
        },
        {
            "key": "S-5",
            'name': "Sub-5",
        },
        {
            "key": "S-6",
            'name': "Sub-6",
            // selected: true
        },
        {
            "key": "S-7",
            'name': "Sub-7",
        },
        {
            "key": "S-8",
            'name': "Sub-8 Summary info for your selected resource",
        }
    ];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});


app.post('/api/csp/customer/fetchcustomers', function (req, res) {

    // for (let index = 0; index < 999999999; index++) { }

    const data = [
        {
            "name": "Cust-123",
            'key': '123'
        },
        {
            "name": "Cust-456",
            'key': '456',
        },
        {
            "name": "Cust-789",
            'key': '789',
        },
        {
            "name": "Cust-f92ba573",
            'key': "f92ba573-65dc-4d23-920a-89179cc32668",
        },

    ];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});



app.post('/api/csp/customer/ratepacks/type', function (req, res) {

    const data = [{ "name": "Yes", "key": "true", "selected": true }, { "name": "No", "key": "false", "selected": false }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});


app.post('/api/csp/billops/usertypes', function (req, res) {

    const data = [{ "name": "Existing", "key": "EXISTING", "selected": false }, { "name": "New", "key": "NEW", "selected": true }];

    responseStatus = 200;

    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});


app.post('/api/user/threshold/thresholdmetriclist', function (req, res) {
    const data = [{ 'key': 'high', 'name': 'High' }, { 'key': 'medium', 'name': 'Medium' }, { 'key': 'critical', 'name': 'Critical' }, { 'key': 'low', 'name': 'Low' }];
    responseStatus = 200;
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/environments', function (req, res) {
    const data = [
        {
            key: 1,
            headerColor: 'orange',
            title: 'AWS',
            status: 'active',
            type: 'AWS_TYPE',
            showEdit: true,
            showDelete: true,
            disabled: false,
        },
        {
            key: 2,
            headerColor: '#64B640',
            title: 'AZURESDSDASD sadasdasdsadsadasd',
            status: 'inactive',
            type: 'AZURE_TYPE',
            showEdit: true,
            showDelete: false,
            disabled: false,
        },
        {
            key: 3,
            headerColor: 'blue',
            title: 'GCP',
            status: 'active',
            type: 'GCP_INFRA',
            showEdit: false,
            showDelete: false,
            disabled: true,
        },
        {
            key: 4,
            headerColor: 'linear-gradient(to right, #D34A46, #5E1CB5)',
            title: 'Heroku',
            // status: 'active',
            type: 'CUSTOM_TYPE',
            showEdit: true,
            showDelete: true,
            disabled: false,
        },
        {
            key: 5,
            headerColor: '#0089D6',
            title: 'Digital Ocean',
            status: 'active',
            type: 'HYBRID_TYPES',
            showEdit: true,
            showDelete: true,
            disabled: false,
        },
    ]
    responseStatus = 200;
    setResponseHeaders(res);
    res.status(responseStatus).send(data);
});

app.post('/api/services', function (req, res) {
    const data = [
        {
            key: 1,
            title: 'CSP Billing',
            description: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            key: 2,
            img: 'azure',
            title: 'Customer Services',
            description: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            key: 3,
            title: 'Services-XYZ',
            img: 'aws',
            description: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            key: 4,
            title: 'Cloud Services',
            description: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            key: 5,
            title: 'Test services',
            description: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            key: 6,
            title: 'Edge Computing',
            description: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
    ]
    responseStatus = 200;
    setResponseHeaders(res);
    res.status(responseStatus).send(data);
});

app.post('/api/roles', function (req, res) {
    const data = [
        {
            key: 1,
            headerColor: 'orange',
            title: 'Admin',
            status: 'active',
            type: 'SYSTEM',
            showEdit: true,
            showDelete: true,
            disabled: true,
        },
        {
            key: 2,
            headerColor: '#64B640',
            title: 'Owner',
            status: 'active',
            type: 'SYSTEM',
            showEdit: true,
            showDelete: false,
            disabled: false,
        },
        {
            key: 3,
            headerColor: 'blue',
            title: 'Editor',
            status: 'active',
            type: 'CUSTOM',
            showEdit: false,
            showDelete: false,
            disabled: false,
        },
        {
            key: 4,
            headerColor: 'linear-gradient(to right, #D34A46, #5E1CB5)',
            title: 'Service Account',
            status: 'inactive',
            type: 'CUSTOM_TYPE',
            showEdit: true,
            showDelete: true,
            disabled: false,
        },
        {
            key: 5,
            headerColor: '#0089D6',
            title: 'Managed',
            status: 'active',
            type: 'HYBRID_TYPES',
            showEdit: true,
            showDelete: true,
            disabled: false,
        },
    ]
    responseStatus = 200;
    setResponseHeaders(res);
    res.status(responseStatus).send(data);
});

app.post('/api/group/resourceorderlist', function (req, res) {
    const data = {
        "email": 'i.am.test.user@gmail.com',
        "customerType": 'EXISTING',
        "customerID": 1234,
        "projects": "S-2",
        "orgName": 'ACB Inc.',
        "industry": ['test-t5.medium'],
        "website": 'https://test.com',
        "turnover": 'test-t1.small',
        "accountType": ['test-t8.medium', 'test-t5.small', 'test-t5.large'],
        "firstName": 'Captain',
        "lastName": 'Steve',
        "designation": 'Developer',
        // "domainName": 'test-domain',
        "phone": 727600000012,
        "appID": 'APP-1234',
        "envState": true,
        "resMgrEndpoint": '/v1/test',
        "mobile": '997600000012',
        "userId": '53',
        "envName": ['west-1231'],
        "packName": "test-pack-name",
        "packCombo": [
            {
                "priceList": 'APP-1234',
                "envState": true,
                "resMgrEndpoint": '/v1/test',
                "unit": 1,
                "category": ['west-1231'],
            },
            {
                "priceList": 'APP-4567',
                "envState": false,
                "resMgrEndpoint": '/v2/test',
                "unit": 2,
                "category": ['west-1231'],
            }, {
                "priceList": 'APP-9999',
                "envState": true,
                "unit": 3,
                "resMgrEndpoint": '/v3/test',
                "category": ['west-1231'],
            }
        ],
        "slabs": [
            {
                "slab": "test-01",
                "rate": "10",
                adjustment: "0",
                total: '0'
            },
            {
                "slab": "test-02",
                "rate": "20",
                adjustment: "0",
                total: '0'
            },
            {
                "slab": "test-03",
                "rate": "30",
                adjustment: "0",
                total: '0'
            }
        ]
    };
    responseStatus = 200;
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post('/api/csp/customer/overview', async function (req, res) {
    const data = {
        drawerToolbar: [
            {
                label: "Go to bill",
                type: "button",
                drillTo: "csp/overview",
                // Replace below line for other context validation
                // drillTo: "admin/settings",
            },
            {
                label: "Setup",
                type: "button",
                drillTo: "admin/settings",
            }
        ]
        , alertData: [{
            key: 'alert1',
            headerColor: '#D34A46',
            title: 'Alerts',
            type: 'list',
            showViewMore: true,
            alertCount: 4,
            noDataText: 'No alerts!',
            alertDataList: [
                'Only 1 month DR service mapped',
                'Bill generation due 4/2/2020',
                'Bill generation due 4/3/2020',
                'Bill generation due 4/5/2020'
            ]
        }, {
            key: 'alert2',
            headerColor: '#FF9D00',
            title: 'Notifications',
            type: 'list',
            showViewMore: false,
            alertCount: 1,
            noDataText: 'No notifications!',
            alertDataList: [
                'Seasonal rate for Rate Card #1 activated',
            ]
        }, {
            key: 'alert2',
            headerColor: '#142C93',
            title: 'Overview',
            type: 'overview',
            showViewMore: false,
            alertCount: 0,
            noDataText: 'No Overviews!',
            alertData: [{
                fieldValue: '1/18/2018',
                label: 'Customer since',
                type: 'text'
            }, {
                fieldValue: '$5000.00',
                label: 'Customer lifetime value',
                type: 'text'
            }, {
                value: [{
                    label: 'SQL Database',
                    time: '131.21 hrs',
                    amount: '$500.00'
                }, {
                    label: 'Virtual Machine',
                    time: '109.41 hrs',
                    amount: '$100.00'
                }, {
                    label: 'Azure Site Recovery',
                    time: '1 month',
                    amount: '$100.00'
                }],
                label: 'Top items',
                type: 'table'
            }, {
                valueList: [{
                    title: 'Next billing cycle: 2020-2-15-20202-3-15',
                    text: 'Last billing cycle: 2020-1-13 to 2020-2-14'
                }, {
                    title: 'Next bill total (est.): $22,105.74',
                    text: 'Last bill total: $23,176.64'
                }],
                label: 'Payments',
                type: 'list'
            }]
        }]
    };


    responseStatus = 200;
    setResponseHeaders(res);
    //res.status(500).send({ error: "Unable to get summary info for your selected resource" });
    res.status(responseStatus).send(data);
});

app.post("/api/dummy/list", function (req, res) {
    const data = [{ "key": "yes", "name": "yes" }, { "key": "no", "name": "no" }];
    setResponseHeaders(res);
    res.status(200).send(data);
})


app.post('/api/csp/customer/invoice/download', function (req, res) {
    setResponseHeaders(res);
    res.download('./README.md');
});


app.post('/api/page/title', function (req, res) {

    const title = req.body.drillParams && req.body.drillParams.email ? `Details for: ${req.body.drillParams.email}` : 'Dynamic Name From API';
    const data = {
        name: title
    }
    setResponseHeaders(res);
    res.status(200).send(data);
});


app.post('/api/cloud-service-data', function (req, res) {

    setResponseHeaders(res);
    res.status(200).send(cloudServiceFakeData);
});



app.post('/api/email/emaillist', function (req, res) {

    const data = [
        { "name": "i.am.test.user@gmail.com", "key": "i.am.test.user@gmail.com", "selected": false },
        { "name": "a2i.user@hotmail.com", "key": "a2i.user@hotmail.com", "selected": false },
        { "name": "power.admin@global.in", "key": "power.admin@global.in", "selected": false },
        { "name": "admin.user@yahoo.in", "key": "admin.user@yahoo.in", "selected": false },
        { "name": "chain.clouds@global.com", "key": "chain.clouds@global.com", "selected": true },
    ];

    setResponseHeaders(res);
    res.status(200).send(data);
});



app.post('/api/csp/analytic/billstatus', function (req, res) {
    const data = [
        { "name": "Draft", "value": 290, "unit": "" },
        { "name": "Customer Review", "value": 120, "unit": "" },
        { "name": "Draft", "value": 180, "unit": "" },
        { "name": "Customer Review", "value": 200, "unit": "" },
        { "name": "Draft", "value": 300, "unit": "" }
    ];
    setResponseHeaders(res);
    res.status(200).send(data);
});



app.post('/api/governance/sankey-data', function (req, res) {

    const filterValue = req.body.filters && req.body.filters.identifier ? req.body.filters.identifier[req.body.filters.identifier.toString().length - 1] : 9;
    const data = [
        { "fromKey": "d-1", "toKey": "sd-1", "from": "Domain-1", "to": "Sub Domain-1", "amount": 900, "value": 10 },
        { "fromKey": "d-2", "toKey": "sd-1", "from": "Domain-2", "to": "Sub Domain-1", "amount": 3900, "value": 8 },
        { "fromKey": "d-2", "toKey": "sd-2", "from": "Domain-2", "to": "Sub Domain-2", "amount": 400, "value": 4 },
        { "fromKey": "d-3", "toKey": "sd-2", "from": "Domain-3", "to": "Sub Domain-2", "amount": 600, "value": 3 },
        { "fromKey": "sd-1", "toKey": "c-1", "from": "Sub Domain-1", "to": "Company-1", "amount": 800, "value": 5 },
        { "fromKey": "sd-1", "toKey": "c-2", "from": "Sub Domain-1", "to": "Company-2", "amount": 800, "value": 4 },
        { "fromKey": "sd-1", "toKey": "c-3", "from": "Sub Domain-1", "to": "Company-3", "amount": 900, "value": 3 },
        { "fromKey": "sd-2", "toKey": "c-3", "from": "Sub Domain-2", "to": "Company-3", "amount": 300, "value": filterValue }
    ];
    setResponseHeaders(res);
    res.status(200).send(data);

});

app.post('/api/pi-graph-data', function (req, res) {
    const data = [
        {
          name: 'Microsoft Azure',
          unit: '$',
          value: 2009819,
        },
        {
          name: 'Amazon AWS',
          unit: '$',
          value: 4744583.2,
        },
        {
          name: 'Microsoft Azure1',
          unit: '$',
          value: 2009819,
        },
        {
          name: 'Amazon AWS1',
          unit: '$',
          value: 4745483.2,
        },
        {
          name: 'Microsoft Azure2',
          unit: '$',
          value: 2409819,
        },
      ];
    setResponseHeaders(res);
    res.status(200).send(data);
});

app.post('/api/stackedBarChart', function (req, res) {
    const data = [{
        country: 'Lithuania',
        research: 501.9,
        marketing: 250,
        sales: 199,
      }, {
        country: 'Czech Republic',
        research: 301.9,
        marketing: 222,
        sales: 251,
      }, {
        country: 'Ireland',
        research: 201.1,
        marketing: 170,
        sales: 199,
      }, {
        country: 'Germany',
        research: 165.8,
        marketing: 122,
        sales: 90,
      }, {
        country: 'Australia',
        research: 139.9,
        marketing: 99,
        sales: 252,
      }, {
        country: 'Austria',
        research: 128.3,
        marketing: 85,
        sales: 84,
      }, {
        country: 'UK',
        research: 99,
        marketing: 93,
        sales: 142,
      }, {
        country: 'Belgium',
        research: 60,
        marketing: 50,
        sales: 55,
      }, {
        country: 'The Netherlands',
        research: 50,
        marketing: 42,
        sales: 25,
      },
      {
        country: 'The Netherlands',
        research: 50,
        marketing: 42,
        sales: 25,
      }];
    setResponseHeaders(res);
    res.status(200).send(data);
});

app.post('/api/extended-summary', function (req, res) {
    const data = [
        {
            percentage: '12',
            progressTitle: 'Budget',
            amtTitle: 'Current Consumptions',
            amount: '$150,000.00',
          },
          {
            percentage: '82',
            progressTitle: 'Budget',
            amtTitle: 'Forecast Consumptions',
            amount: '$150,000.00',
          },
      ];

    setResponseHeaders(res);
    res.status(200).send(data);
});

app.post("/api/csp/analytic/graph", function (req, res) {
    const data = [
        {
            "name": "Current Monthly Bill",
            "value": 150000000,
            "unit": "INR",
            "trend": 24,
            "trendType": "up",
            "trendUnit": "%",
            "timeSeries": [
                {
                    "date": "2020-03-14",
                    "Bill Amount": 0
                },
                {
                    "date": "2020-04-14",
                    "Bill Amount": 49557.95
                },
                {
                    "date": "2020-04-28",
                    "Bill Amount": 51057.95
                },
                {
                    "date": "2020-05-14",
                    "Bill Amount": 335575.43
                },
                {
                    "date": "2020-05-28",
                    "Bill Amount": 337075.43
                },
                {
                    "date": "2020-06-14",
                    "Bill Amount": 823467.95
                },
                {
                    "date": "2020-07-14",
                    "Bill Amount": 954633.12
                },
                {
                    "date": "2020-08-14",
                    "Bill Amount": 969742.84
                }
            ]
        },
        {
            "name": "Customers",
            "value": 52,
            "unit": "",
            "trend": "",
            "trendType": "down",
            "trendUnit": "%",
            "timeSeries": [
                {
                    "date": "2020-03-14",
                    "Customers": 42
                },
                {
                    "date": "2020-04-14",
                    "Customers": 43
                },
                {
                    "date": "2020-04-28",
                    "Customers": 50
                },
                {
                    "date": "2020-05-14",
                    "Customers": 51
                },
                {
                    "date": "2020-05-28",
                    "Customers": 54
                },
                {
                    "date": "2020-06-14",
                    "Customers": 60
                },
                {
                    "date": "2020-07-14",
                    "Customers": 65
                },
                {
                    "date": "2020-08-14",
                    "Customers": 66
                }
            ]
        },
        {
            "name": "Current Monthly Bill",
            "value": 150000000,
            "secValue": 150000000,
            "unit": "INR",
            "trend": 24,
            "trendType": "down",
            "trendUnit": "%",
            "timeSeries": [
                {
                    "date": "2020-03-14",
                    "Amount Consumed": 0,
                    "PO Left": 4020413
                },
                {
                    "date": "2020-04-14",
                    "Amount Consumed": 49557.95,
                    "PO Left": 3970855.04
                },
                {
                    "date": "2020-04-28",
                    "Amount Consumed": 51057.95,
                    "PO Left": 3969355.04
                },
                {
                    "date": "2020-05-14",
                    "Amount Consumed": 335575.43,
                    "PO Left": 3684837.56
                },
                {
                    "date": "2020-05-28",
                    "Amount Consumed": 337075.43,
                    "PO Left": 3683337.56
                },
                {
                    "date": "2020-06-14",
                    "Amount Consumed": 823467.95,
                    "PO Left": 3196945.04
                },
                {
                    "date": "2020-07-14",
                    "Amount Consumed": 954633.12,
                    "PO Left": 3065779.87
                },
                {
                    "date": "2020-08-14",
                    "Amount Consumed": 969742.84,
                    "PO Left": 3050670.15
                }
            ]
        }
    ]
    setResponseHeaders(res);
    res.status(200).send(data);
})



app.post('/api/tree-data', function (req, res) {
    setResponseHeaders(res);
    res.status(200).send(treeDataFake);
});

var listener = app.listen(PORT, function () {
    console.log('Mock server is up and listening on port ' + listener.address().port);
});
