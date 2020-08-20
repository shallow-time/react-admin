import {
  reqGetCourse,
} from "@api/edu/course";

import {reqGetChapter} from "@api/edu/chapter"

import {reqGetLesson} from "@api/edu/lesson"

import {
  GET_COURSE_LIST,
  GET_CHAPTER_LIST,
  GET_LESSON_LIST
} from "./constants";
/**
 *获取所有课程列表数据 
 */
const getCourseListSync = (data) => ({
  type: GET_COURSE_LIST,
  data
});

export const getCourseList = () => {
  return (dispatch) => {
    return reqGetCourse().then((response) => {
      dispatch(getCourseListSync(response));
     
      return response.total;
    });
  };
};


/**
 *获取章节分页列表数据 
 */
const getChapterListSync = (data) => ({
  type: GET_CHAPTER_LIST,
  data
});

export const getChapterList = (carseId) => {
  return (dispatch) => {
    return reqGetChapter(carseId).then((response) => {
      dispatch(getChapterListSync(response));
     
      return response.total;
    });
  };
};


/**
 *获取章节分页列表数据 
 */
const getLessonListSync = (data) => (

  {
  type: GET_LESSON_LIST,
  data
});

export const getLessonList = (chapterId) => {
  return (dispatch) => {
    return reqGetLesson(chapterId).then((response) => {
      
      dispatch(getLessonListSync({response,chapterId}));
     
      return response.total;
    });
  };
};

