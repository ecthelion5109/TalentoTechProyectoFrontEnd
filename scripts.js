document.addEventListener("DOMContentLoaded", () => {
	let contenedor_de_cards = document.getElementById("contenedor_de_cards");

	function fetchProductos() {
		let limite = 0;
		const productos_que_me_interesan = ["laptops", "mobile-accessories", "smartphones", "tablets"];
		
		fetch(`https://dummyjson.com/products?limit=0`)
			.then((response) => response.json())
			.then((data) => {
				const productos = data.products;

				contenedor_de_cards.innerHTML = ""; // Limpiea

				for (let i = 0; i < productos.length; i++) {
					let producto = productos[i];
					if (!productos_que_me_interesan.includes(producto.category)) {
						continue;
					} 
					if (limite >= 8) {
						break; // Basta
					}
					
					// Crear las cards
					const cardCol = document.createElement("div");
					cardCol.className = "col";

					cardCol.innerHTML = `
						<div class="card">
							<img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
							<div class="card-body">
								<h5 class="card-title">${producto.title}</h5>
								<p class="card-text">${producto.description}</p>
								<div class="btn-group-toggle" data-toggle="buttons">
									<label class="btn btn-secondary active">
										<input type="checkbox" checked autocomplete="off"> Agregado al chango
									</label>
								</div>
							</div>
						</div>
					`;

					limite++; // Increment the product count
					contenedor_de_cards.appendChild(cardCol);
				}
			})
			.catch((error) => console.error("Error fetching products:", error));
	}

	fetchProductos();
});
