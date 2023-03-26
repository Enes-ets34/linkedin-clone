import moment from "moment";
moment.updateLocale("en", {
  relativeTime: {
    future: "%s içinde",
    past: "%s",
    s: "bir kaç saniye",
    ss: "%ds",
    m: "bir dakika",
    mm: "%dd",
    h: "bir saat",
    hh: "%ds",
    d: "bir gün",
    dd: "%dg",
    w: "bir hafta",
    ww: "%dh",
    M: "1a",
    MM: "%da",
    y: "bir yıl",
    yy: "%dy",
  },
});
export default function (time) {
  const created_at = () => {
    return moment(time).fromNow();
  };
  return { created_at };
}
