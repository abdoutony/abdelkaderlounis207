window.onscroll = function () {
  if (
    document.body.scrollTop >= 280 ||
    document.documentElement.scrollTop >= 280
  ) {
    document.getElementById("site-navbar").style.backgroundColor = "#090953"
  } else {
    document.getElementById("site-navbar").style.backgroundColor = "#01012b"
  }
}
