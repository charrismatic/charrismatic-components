
function get_time_hash() {
  return btoa(Date.now().toLocaleString().split(",").reverse()).substring(0, 10)
}
