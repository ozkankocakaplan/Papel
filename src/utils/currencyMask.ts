import "intl";
import 'intl/locale-data/jsonp/tr';
const currencyMask = (balance: number = 0) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(balance)
}
export default currencyMask;