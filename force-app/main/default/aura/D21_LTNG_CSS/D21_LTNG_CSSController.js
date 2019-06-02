({
	External_scriptsLoaded : function(component, event, helper) {
		var CourseListData = _SampleFun.getCourseList();
        component.set("v.courseData",CourseListData);
	}
})