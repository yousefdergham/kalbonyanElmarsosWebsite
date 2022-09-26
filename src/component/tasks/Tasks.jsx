import React from "react";
import "./tasks.css";
import tasks from "../../assest/tasks.png";

const Tasks = () => {
  return (
    <section className="tasks" id="tasks">
      <h1>تسليمات المسابقة</h1>
      <div className="tasks-contents">
        <img src={tasks} />
        <div className="tasks-contents-content">
          <ol>
            <li>عشر شهادات من Linkedin Learning .</li>
            <li>أربع شهادات من Udemy .</li>
            <li>شهادتان من Cloud Guru .</li>
            <li>
              رفع كلاَ من التطبيقات العملية ولينك تشغليها والأكواد وشهادة كل
              كورس علي ريبو كالبنيان المرصوص .
            </li>
            <li>الانتهاء من مشروع Serverless-stack ورفعه علي الريبو .</li>
            <li>إنشاء سيرة ذاتية كما في هذا الملف بكل الشهادات والمشاريع .</li>
            <li>
              إنشاء حساب Linkedin -إن لم يكن لديك ، وفيه كل المشاريع وكل
              الشهادات .
            </li>
            <li>إنشاء Portfolio كهذا المثال .</li>
          </ol>
          <div className="tasks-contents-content-buttons">
            <a
              className="btn-green"
              target="_blank"
              href="https://github.com/KalbonyanElmarsos/Kalbonyan-Elmarsos"
            >
              Repo
            </a>
            <a
              className="btn-green"
              target="_blank"
              href="https://docs.google.com/document/d/1sGWDB-Ee94LRqqeya_DlJLor9lG2i-47/edit"
            >
              cv
            </a>
            <a
              className="btn-green"
              target="_blank"
              href="https://tarek-radwan.web.app/"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
