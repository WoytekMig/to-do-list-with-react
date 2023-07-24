import { takeEvery, call, put, takeLatest, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from './getExampleTasks';

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Something went wrong.");
    }
}

export function* watchFetchExampleTasks() {
    console.log("Saga wpięta");
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}