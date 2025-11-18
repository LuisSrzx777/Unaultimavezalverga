document.getElementById("load-btn").addEventListener("click", async () => {
  const out = document.getElementById("output");
  out.innerHTML = "Cargando...";

  try {
    const res = await fetch("/api/computers");
    const data = await res.json();

    out.innerHTML = data
      .map(pc => `
        <div class="card">
          <h3>${pc.name}</h3>
          <p><strong>CPU:</strong> ${pc.cpu}</p>
          <p><strong>RAM:</strong> ${pc.ram}</p>
          <p><strong>Almacenamiento:</strong> ${pc.storage}</p>
          <p><strong>GPU:</strong> ${pc.gpu}</p>
        </div>
      `)
      .join("");

  } catch (err) {
    out.innerHTML = "Error cargando datos.";
  }
});
