"use strict";

function courseView() {
  return `
    <section class="course-parent">

    ${allCourses()}

    </section>
    `;
}

function allCourses() {
  let html = "";
  for (let i = 0; i < model.courseStore.length; i++) {
    html += `
        <div class="course-frame">
            <h3>${model.courseStore[i].title}</h3>
            <span>${model.courseStore[i].price}kr</span>
            <button onclick="addCourseToShoppingCart(${model.courseStore[i].courseId})">Legg til kurs i handlevogn</button>
        </div>
        `;
  }

  return html;
}
