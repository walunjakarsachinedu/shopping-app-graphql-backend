
const schemaString = ` 
# ------------------- queries -------------------

type Query {
  readFile: String,
  getAllProduct: [Product]
  getCart(userId: ID!): Cart
  # getOrderHistory(userId: ID!): OrderHistory
}

type Mutation {
  createUser(user: UserInputData!): User
  login(email: String!, password: String!): String

  addProduct(product: NewProductInputData!): Product
  updateProduct(product: UpdateProductInputData!): Product
  deleteProduct(productId: ID!): Boolean

  addCartItem(userId: ID!, cartItem: CartItemInputData!): CartItem
  updateCartItem(userId: ID!, cartItem: CartItemInputData!): CartItem
  deleteCartItem(userId: ID!, productId: ID!): CartItem
}


# ------------------- input types -------------------

input UserInputData {
  name: String!
  address: String!
  email: String!
  password: String!
  role: String!
}

input NewProductInputData {
  name: String!
  description: String!
  imageUrl: String!
  price: String!
  quantity: Int!
}

input UpdateProductInputData {
  id: ID!
  name: String
  description: String
  imageUrl: String
  price: String
  quantity: Int
}

input CartItemInputData {
  productId: ID!
  quantity: Int! 
}



# ------------------- models -------------------

type User {
  id: ID!
  name: String!
  address: String!
  email: String!
  password: String!
  role: String!
}

type Product {
  id: ID!
  name: String!
  description: String!
  imageUrl: String!
  price: String!
  quantity: Int!
}

type Cart {
  userId: String!
  items: [CartItem!]!
}

type CartItem {
  productId: ID!
  product: Product
  quantity: Int!
}

# OrderHistory {
#   userId: ID!
#   history: [OrderHistoryItem!]!
# }

# OrderHistoryItem {
#   date: String!
#   productId: ID!
#   quantity: Int!
# }
`
export default schemaString;