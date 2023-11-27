interface invoiceItem {
  product: string;
  quantity: number;
  price: number;
}

type Invoice = Array<invoiceItem>;

function getTotalInvoice(invoice: Invoice): number {
  let invoiceTotal = invoice.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return invoiceTotal;
}

function applyDiscount(
  invoice: Invoice,
  discountValue = 10,
  productOfDiscount?: string
) {
  discountValue = discountValue / 100;

  let newInvoice = invoice.map((item) => {
    if (productOfDiscount === undefined || item.product === productOfDiscount) {
      item.price = item.price - item.price * discountValue;
    }
    return item;
  });

  return newInvoice;
}

export function invoiceExample() {
  let example: Invoice = [{ product: "banana", price: 10, quantity: 10 }];

  example = applyDiscount(example);

  console.log(`Invoice Total:${getTotalInvoice(example)}`);
}
