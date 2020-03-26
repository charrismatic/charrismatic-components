function append_html(e, t, i) {
  e && "" !== e || (e = "body");
  var a = "div"
    , n = ""
    , o = "";
  i && "" !== i && (i.tag && (a = i.tag),
  i.class && (n = i.class),
  i.id && (o = i.id));
  var r = document.createElement(a);
  return r.className += n,
  r.id = o,
  r.innerHTML = t,
  document.querySelector(e).appendChild(r),
  !0
}

function create_node(e) {
  if (e.tag_name)
    t = e.tag_name;
  else
    var t = "div";
  var i = document.createElement(t);
  return e.class_name && (i.className = e.class_name),
  e.id && (i.id = e.id),
  e.html_content && (i.innerHTML = e.html_content),
  i
}

function get_node(e) {
  return document.querySelector(e)
}
function get_all_nodes(e) {
  return document.querySelectorAll(e)
}
function is_node(e) {
  return get_node(e) || !1
}
function has_class(e, t) {
  return e.classList.contains(t)
}
function add_class(e, t) {
  if (e.classList.contains(t))
    return !1;
  e.classList.add(t)
}
function remove_class(e, t) {
  if (!e.classList.contains(t))
    return !1;
  e.classList.remove(t)
}
