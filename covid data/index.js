let mainSection = document.getElementById("main");

function fetchdata() {
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then((res) => res.json())
        .then((data) => {
            card(data.data.regional); // Correctly access the 'regional' array
        })
        .catch((err) => console.log("Error fetching data:", err));
}
fetchdata();

function card(data) {
    const store = data.map((region) =>
        adddata(
            region.totalConfirmed, 
            region.confirmedCasesIndian, 
            region.confirmedCasesForeign, 
            region.discharged, 
            region.deaths
        )
    );
    mainSection.innerHTML = store.join('');
}

function adddata(total, confirmedCasesIndian, confirmedCasesForeign, discharged, deaths) {
    return `
        <div class="card-body">
            <h4 class="card-name">TOTAL: ${total}</h4>
            <p class="card-category">Confirmed Cases (Indian): ${confirmedCasesIndian}</p>
            <p class="card-category">Confirmed Cases (Foreign): ${confirmedCasesForeign}</p>
            <p class="card-category">Discharged: ${discharged}</p>
            <p class="card-category">Deaths: ${deaths}</p>
        </div>
    `;
}
