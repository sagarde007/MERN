 setInterval(()=>{

    const result = document.getElementById("result");

    const currenttime = Date.now();

    const olimpicTime = new Date(2028, 6, 14).getTime();

    let timer = olimpicTime - currenttime;

    const day = Math.floor(timer / (1000 * 60 * 60 * 24));
    timer %= 1000 * 60 * 60 * 24;

    const hour = Math.floor(timer / (1000 * 60 * 60));
    timer %= 1000 * 60 * 60;

    const min = Math.floor(timer / (1000 * 60));
    timer %= 1000 * 60;

    const sec = Math.floor(timer / 1000);
    timer %= 1000;

    result.textContent = `${day} days ${hour} Hour ${min} Minuite ${sec} Second`;

 },1000)






