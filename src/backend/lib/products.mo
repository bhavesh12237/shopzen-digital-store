import List "mo:core/List";
import Types "../types/products";
import Common "../types/common";

module {
  public func listProducts(
    products : List.List<Types.Product>,
    filter : Types.ProductFilter
  ) : [Types.Product] {
    let filtered = products.filter(func(p) {
      let categoryMatch = switch (filter.category) {
        case (null) true;
        case (?cat) p.category == cat;
      };
      let searchMatch = switch (filter.searchText) {
        case (null) true;
        case (?term) {
          let lower = term.toLower();
          p.name.toLower().contains(#text lower) or
          p.description.toLower().contains(#text lower)
        };
      };
      categoryMatch and searchMatch
    });
    filtered.toArray()
  };

  public func getProduct(
    products : List.List<Types.Product>,
    id : Common.ProductId
  ) : ?Types.Product {
    products.find(func(p) { p.id == id })
  };

  public func addProduct(
    products : List.List<Types.Product>,
    name : Text,
    description : Text,
    price : Float,
    category : Text,
    imageUrl : Text,
    stock : Nat,
    rating : Float
  ) : Types.Product {
    let id = products.size() + 1;
    let product : Types.Product = {
      id;
      name;
      description;
      price;
      category;
      imageUrl;
      stock;
      rating;
    };
    products.add(product);
    product
  };

  public func seedProducts(products : List.List<Types.Product>) {
    if (products.size() > 0) { return };
    let seed : [(Text, Text, Float, Text, Text, Nat, Float)] = [
      ("Wireless Noise-Cancelling Headphones", "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and studio-quality sound.", 149.99, "Electronics", "https://picsum.photos/seed/headphones/400/300", 50, 4.7),
      ("4K Smart TV 55 inch", "Ultra HD smart television with HDR support, built-in streaming apps, and voice control integration.", 599.99, "Electronics", "https://picsum.photos/seed/tv55/400/300", 20, 4.5),
      ("Mechanical Gaming Keyboard", "Tactile blue switches, RGB backlit keys, anti-ghosting technology, and a compact tenkeyless layout.", 89.99, "Electronics", "https://picsum.photos/seed/keyboard/400/300", 75, 4.6),
      ("Portable Bluetooth Speaker", "Waterproof outdoor speaker with 360-degree sound, 20-hour battery, and built-in microphone.", 59.99, "Electronics", "https://picsum.photos/seed/speaker/400/300", 100, 4.4),
      ("Men's Classic Slim Fit T-Shirt", "100% organic cotton, preshrunk fabric available in 12 colors. Comfortable everyday essential.", 24.99, "Clothing", "https://picsum.photos/seed/tshirt/400/300", 200, 4.3),
      ("Women's Running Jacket", "Lightweight windproof running jacket with reflective strips, zip pockets, and moisture-wicking lining.", 74.99, "Clothing", "https://picsum.photos/seed/jacket/400/300", 80, 4.5),
      ("Unisex Canvas Sneakers", "Classic low-top canvas shoes with rubber sole. Vegan-friendly materials, available in sizes 5–13.", 49.99, "Clothing", "https://picsum.photos/seed/sneakers/400/300", 120, 4.2),
      ("The Art of Clean Code", "A practical guide to writing readable, maintainable, and efficient code with real-world examples.", 34.99, "Books", "https://picsum.photos/seed/cleancode/400/300", 60, 4.8),
      ("Digital Marketing Mastery", "Step-by-step playbook covering SEO, social media, email campaigns, and e-commerce conversion strategies.", 29.99, "Books", "https://picsum.photos/seed/digitalmarketing/400/300", 90, 4.6),
      ("The Lean Startup", "Eric Ries explains how modern companies use continuous innovation to build successful businesses.", 19.99, "Books", "https://picsum.photos/seed/leanstartup/400/300", 110, 4.7),
      ("Bamboo Desk Organizer", "6-compartment eco-friendly bamboo desk organizer. Keeps pens, scissors, and small items tidy.", 39.99, "Home", "https://picsum.photos/seed/organizer/400/300", 45, 4.4),
      ("Ceramic Pour-Over Coffee Set", "Handcrafted ceramic dripper and carafe set for a smooth, rich pour-over brew. Includes reusable filter.", 54.99, "Home", "https://picsum.photos/seed/coffee/400/300", 35, 4.9),
    ];
    for ((name, description, price, category, imageUrl, stock, rating) in seed.values()) {
      let id = products.size() + 1;
      let product : Types.Product = { id; name; description; price; category; imageUrl; stock; rating };
      products.add(product);
    };
  };
};
