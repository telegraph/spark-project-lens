import { Dispatch } from 'redux';
import { FETCH_DATA } from './types';

export const fetchData = () => (dispatch: Dispatch) => {
  // API call goes here
  dispatch({
    type: FETCH_DATA,
    payload: [{ clientName: "Natwest", projectName: "Women Mean Business", campaignID: "0", dueDate: "2020-09-30T18:00:00:000+0000" }, { clientName: "Natwest", projectName: "Women Mean Business", campaignID: "423", dueDate: "2020-01-30T18:00:00:000+0000" }, { clientName: "HSBC", projectName: "Women Mean Business", campaignID: "429", dueDate: "2020-07-30T18:00:00:000+0000" },{ clientName: "John Lewis", projectName: "Women Mean Business", campaignID: "445", dueDate: "2020-02-10T18:00:00:000+0000" }, { clientName: "John Lewis", projectName: "Women Mean Business", campaignID: "636", dueDate: "2020-01-19T18:00:00:000+0000" }, { clientName: "John Lewis", projectName: "Women Mean Business", campaignID: "987", dueDate: "2020-01-26T18:00:00:000+0000" }, { clientName: "John Lewis", projectName: "Women Mean Business", campaignID: "765", dueDate: "2020-02-20T18:00:00:000+0000" }, { clientName: "John Lewis", projectName: "Women Mean Business", campaignID: "444", dueDate: "2020-02-24T18:00:00:000+0000" }, { clientName: "John Lewis", projectName: "Women Mean Business", campaignID: "497", dueDate: "2020-01-20T18:00:00:000+0000" }]
  });
};
