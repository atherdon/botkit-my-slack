module.exports = function(controller) {
}
// const STATUS_TYPES = require('../status_types');



// module.exports = {
//   ANSWER_STATUS: {
//     // Must be the same as defined on fixtures/1_answer_status.js
//     WAITING: 1,
//     ANSWERED: 2,
//   },
//
//   FLOW_STATUS: {
//     // Must be the same as defined on fixtures/1_flow_status.js
//     EDITING: 1,
//     ACTIVE: 2,
//     INACTIVE: 3,
//   },
//
//   RESPONDENT_FLOW_STATUS: {
//     // Must be the same as defined on fixtures/1_respondent_flow_status.js
//     NOT_STARTED: 1,
//     IN_PROGRESS: 2,
//     FINISHED: 3,
//     TERMINATED_BY_DISABLED_FLOW: 4,
//   },



// switch (step.step_type_id) {
//                case STATUS_TYPES.STEP_TYPES.ANNOUNCEMENT:
//                  addStepToConversation.announcement(stepArguments);
//                  break;
//                case STATUS_TYPES.STEP_TYPES.FREE_TEXT:
//                  addStepToConversation.freeText(stepArguments);
//                  break;
//                case STATUS_TYPES.STEP_TYPES.MULTIPLE_CHOICE:
//                  addStepToConversation.multipleChoice(stepArguments);
//                  break;
//                case STATUS_TYPES.STEP_TYPES.UPLOAD_TO_BOT:
//                  addStepToConversation.uploadDocumentToTheBot(stepArguments);
//                  break;
//                case STATUS_TYPES.STEP_TYPES.DOWNLOAD_FROM_BOT:
//                  addStepToConversation.downloadDocumentFromTheBot(stepArguments);
//                  break;
//                case STATUS_TYPES.STEP_TYPES.DOWNLOAD_FROM_BOT_AND_UPLOAD_BACK:
//                  addStepToConversation.downloadDocumentFromTheBotAndUploadItBack(stepArguments);
//                  break;
//                case STATUS_TYPES.STEP_TYPES.PEOPLE_TO_MEET:
//                  addStepToConversation.peopleToMeet(stepArguments);
//                  break;
//                default:
//                  break;
//              }
//            });
