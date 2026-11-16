const date = new Date().toDateString();
document.getElementById('date').innerHTML = date ;

const form = document.getElementById("coin");

async function addAmount(data){
    const res = await fetch("https://script.google.com/macros/s/AKfycbyOz8yzmKvLRoWd5hlzRs19db0UCNTJBNjbbKBQOpfgehpembqN02maj0jAwtlzTwpfjQ/exec",{
        method:"POST",
        headers:{
            "Content-Type": "text/plain;charset=utf-8"
        },
        body:JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);
    let e = document.getElementById("error");

    if (!result.success){
        e.style.color = "Red";
    }
    else{
        e.style.color= "Green";
    }

    e.innerHTML = result.message ;

}

form.addEventListener("submit",function(event){
    event.preventDefault();


    let t = document.getElementById("Time").value;
    t = String(t)
    const ct = document.getElementById("Cardtype").value;
    const bt = document.getElementById("Banktype").value;
    const a = document.getElementById("Amount").value;
    const c = document.getElementById("categories").value;
    const n = document.getElementById("Notes").value;

    const data = {
        time:t,
        cardtype:ct,
        banktype:bt,
        amount:a,
        categorie:c,
        notes:n

    }
    
    addAmount(data);

    console.log(ct)
    console.log(bt)
    console.log("The form submmited successfully.")
})