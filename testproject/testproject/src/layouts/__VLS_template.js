export default (await import('vue')).defineComponent({
created() {
this.theme = JSON.parse(localStorage.getItem('theme'));
},
data() {
return {
left: false, right: false, theme: ''
};
},
watch: {
theme() {
localStorage.setItem('theme', JSON.stringify(this.theme));
}
}
});
function __VLS_template() {
// @ts-ignore
[left, $route, theme, $q, vRipple, right];
return {};
}
