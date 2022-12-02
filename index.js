setInterval(() => {
    d= new Date();
    hTime=d.getHours();
    mTime=d.getMinutes();
    sTime=d.getSeconds();
    hRotation=30*hTime+mTime/2;
    mRotation=6*mTime;
    sRotation=6*sTime;
    hour.style.transform= `rotate(${hRotation}deg)`;
    Minute.style.transform= `rotate(${mRotation}deg)`;
    Second.style.transform= `rotate(${sRotation}deg)`;
}, 1000);