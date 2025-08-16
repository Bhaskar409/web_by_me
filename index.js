function updateclock()
{
    const now =new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const seconddeg = 6*second;
    const minutedeg = (minute+second/60)*6;
    const hourdeg = (hour%12 + minute/60) *30;

    document.getElementById('second').style.transform = `rotate(${seconddeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minutedeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourdeg}deg)`;
}


function updatedigiclock()
{
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const h = String(hour).padStart(2,'0');
    const m = String(minute).padStart(2,'0');
    const s = String(second).padStart(2,'0');

    document.getElementById('digihour').textContent = h;
    document.getElementById('digiminute').textContent = m;
    document.getElementById('digisecond').textContent = s;
}

updateclock();
updatedigiclock();


setInterval(updateclock, 1000);
setInterval(updatedigiclock,1000);
