const events = [
    {
      title: "Konser Musik Malam",
      image: "https://i.pinimg.com/1200x/0d/b2/58/0db258db5e2d343fc930aeef0ead3a38.jpg",
      description: "Nikmati malam penuh musik dan hiburan bersama artis favorit Anda!"
    },
    {
      title: "Workshop Desain Grafis",
      image: "https://i.pinimg.com/736x/e7/44/c3/e744c3b6e51940e650abcd2feb54a049.jpg",
      description: "Pelajari teknik desain grafis dari para profesional industri."
    },
    {
      title: "Pameran Teknologi",
      image: "https://i.pinimg.com/736x/93/f9/9d/93f99d2952378d333fbc14c3ad69fd87.jpg",
      description: "Temukan inovasi dan gadget terbaru dalam dunia teknologi."
    },
    {
      title: "Festival Kuliner Nusantara",
      image: "https://i.pinimg.com/736x/85/10/c2/8510c2608f1277c8ac0a5ffa259a6746.jpg",
      description: "Cicipi berbagai hidangan khas dari seluruh Indonesia!"
    },
    {
      title: "Seminar Kewirausahaan",
      image: "https://i.pinimg.com/736x/0e/0a/a8/0e0aa84c7a645b5a92eb582cef49635a.jpg",
      description: "Tingkatkan wawasan bisnis Anda bersama para pengusaha sukses."
    }
  ];
  
  const eventList = document.getElementById("event-list");
  
  events.forEach((event, i) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${event.image}" class="card-img-top" alt="${event.title}">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#eventModal" onclick="showDetail(${i})">Lihat Detail</button>
        </div>
      </div>
    `;
    eventList.appendChild(card);
  });
  
  function showDetail(index) {
    const event = events[index];
    document.getElementById("modalTitle").textContent = event.title;
    document.getElementById("modalBody").innerHTML = `
      <img src="${event.image}" class="img-fluid mb-3">
      <p>${event.description}</p>
      <a href="register.html" class="btn btn-success">Daftar Sekarang</a>
    `;
  }
  