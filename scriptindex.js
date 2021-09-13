const getshowSlider = async () => {
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/slider"
    );
    let slide = response.data;
    let loopedSlide = ` <div class="carousel-item active">
                                  <img src="${slide[0].imageUrl}" class="d-block w-100" alt="">
                                  <div class="carousel-caption d-block">
                                      <h3>${slide[0].sliderText}</h3>
                                  </div>
                              </div>`;
    for (let i = 1; i < slide.length; i++) {
      loopedSlide += `<div class="carousel-item">
                                  <img src="${slide[i].imageUrl}" class="d-block w-100" alt="">
                                  <div class="carousel-caption d-block">
                                      <h3>${slide[i].sliderText}</h3>
                                  </div>
                              </div>`;
    }
    document.getElementById("slider").innerHTML = loopedSlide;
  } catch (error) {
    console.log("error", error);
  }
};

getshowSlider();

const getshowProducts = async () => {
  try {
    let response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productlist"
    );
    let product = response.data;
    document.getElementById(
      "productdisplay"
    ).innerHTML = `<div class="container">
                  <div class="d-inline-flex flex-wrap flex-row justify-content-start">
                      ${product.map((prod) => {
                        return `<div class="me-4">
                                      <div class="card text-center" style="width: 18rem;"> <img src="${prod.prdImageUrl}" class="card-img-top" alt="...">
                                          <div class="card-body">
                                              <h6 class="card-title">${prod.prdname}</h6>
                                              <div class="container">
                                                  <div class="row">
                                                      <div class="col">
                                                          <p class="card-text price pt-2" style="color:crimson";>$${prod.prdPrice}</p>
                                                      </div>
                                                      <div class="col">
                                                          <button type="button" onclick="location.href = 'productDetail.html?id=${prod.id}';" class="btn btn-dark">Add</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>`;
                      })}
                  </div>
              </div>`;
  } catch (error) {
    console.log("error", error);
  }
};

getshowProducts();
