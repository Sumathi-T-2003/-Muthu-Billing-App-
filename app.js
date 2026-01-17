const apiUrl = "http://localhost:5000/api/products";

document.getElementById("addBtn").addEventListener("click", addProduct);

async function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  await fetch(`${apiUrl}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, quantity })
  });

  loadProducts();
}

async function loadProducts() {
  const res = await fetch(apiUrl);
  const products = await res.json();

  const table = document.getElementById("productTable");
  table.innerHTML = "";

  let total = 0;

  products.forEach(p => {
    const rowTotal = p.price * p.quantity;
    total += rowTotal;

    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td>${p.quantity}</td>
        <td>${rowTotal}</td>
        <td>
          <button onclick="deleteProduct('${p._id}')">Delete</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("total").innerText = total;
}

async function deleteProduct(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  loadProducts();
}

loadProducts();
