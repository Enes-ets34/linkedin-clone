import moment from "moment";
moment.updateLocale("tr", {
  relativeTime: {
    future: "%s içinde",
    past: "%s  önce",
    s: "bir kaç saniye",
    ss: "%d saniye",
    m: "bir dakika",
    mm: "%d dakika",
    h: "bir saat",
    hh: "%d saat",
    d: "bir gün",
    dd: "%d gün",
    w: "bir hafta",
    ww: "%d hafta",
    M: "bir ay",
    MM: "%d ay",
    y: "bir yıl",
    yy: "%d yıl",
  },
});
export default function (time) {
  const created_at = () => {
    return moment(time).fromNow();
  };
  return { created_at };
}
