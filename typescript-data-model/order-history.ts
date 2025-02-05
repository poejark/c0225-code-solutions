interface Item {
  itemRef: string;
  returnable: boolean;
  delivered: boolean;
  cost: number;
  // metadata here per order.
}

interface Order {
  orderID: string;
  orderDetails: string;
  orderInvoice: string;
  orderUser: string;
  totalCharge: number;
  orderDate: string;
  orderItems: Item[];
  // returnable: boolean;
  // delivered: boolean;
  // does the interface include the meta information such as buttons, embedded, images, and so forth?
}

const orderHistory: Order[] = [
  {
    orderID: '11439416898772232',
    orderDetails: 'url.com',
    orderInvoice: 'url.com',
    orderUser: 'url.com',
    totalCharge: 34,
    orderDate: '08042020',
    orderItems: [
      { itemRef: 'url.com', returnable: false, delivered: true, cost: 34 },
    ],
  },
  {
    orderID: '11399842681280257',
    orderDetails: 'url.com',
    orderInvoice: 'url.com',
    orderUser: 'url.com',
    totalCharge: 44.53,
    orderDate: '07192020',
    orderItems: [
      { itemRef: 'url.com', returnable: false, delivered: true, cost: 41.33 },
    ],
  },
  {
    orderID: '11428755579059409',
    orderDetails: 'url.com',
    orderInvoice: 'url.com',
    orderUser: 'url.com',
    totalCharge: 17.22,
    orderDate: '07042020',
    orderItems: [
      { itemRef: 'url.com', returnable: false, delivered: true, cost: 15.98 },
    ],
  },
  {
    orderID: '11328831772648248',
    orderDetails: 'url.com',
    orderInvoice: 'url.com',
    orderUser: 'url.com',
    totalCharge: 138.93,
    orderDate: '07032020',
    orderItems: [
      { itemRef: 'url.com', returnable: false, delivered: true, cost: 94.95 },
      { itemRef: 'url.com', returnable: false, delivered: true, cost: 33.99 },
    ],
  },
];
