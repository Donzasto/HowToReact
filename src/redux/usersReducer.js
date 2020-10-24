import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelpers";

const FOLLOW = "HowToReact/user/FOLLOW";
const UNFOLLOW = "HowToReact/user/UNFOLLOW";
const SET_USERS = "HowToReact/user/SET_USERS";
const SET_CURRENT_PAGE = "HowToReact/user/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "HowToReact/user/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "HowToReact/user/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "HowToReact/user/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            /*return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            }*/
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            /*return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
            }*/
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case  SET_USERS:
            return {...state, users: action.users};
        case  SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case  SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case  TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case  TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            };
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

        dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId);

        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));

}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;