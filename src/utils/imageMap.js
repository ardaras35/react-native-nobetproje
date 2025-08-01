const imageMap = {
  arda: require('../../assets/ogretmenler/arda.png'),
  ilayda: require('../../assets/ogretmenler/ilayda.png'),
  selin: require('../../assets/ogretmenler/selin.png'),
  poyraz: require('../../assets/ogretmenler/poyraz.png'),
  can: require('../../assets/ogretmenler/can.png'),
  baran: require('../../assets/ogretmenler/baran.png'),
  doruk: require('../../assets/ogretmenler/doruk.png'),
  ege: require('../../assets/ogretmenler/ege.png'),
  utku: require('../../assets/ogretmenler/utku.png'),
  yaren: require('../../assets/ogretmenler/yaren.png'),
};

export function getTeacherImage(imageName) {
  const key = imageName?.replace('.png', '');
  return imageMap[key] || require('../../assets/default.png');
}
