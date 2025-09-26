import ScrollReveal from 'scrollreveal'

const sr = ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 2400,
  delay: 200,
})

export const vScrollReveal = {
  mounted(el, binding) {
    const config = binding.value || {}
    el.classList.add('scroll-reveal')

    sr.reveal(el, { ...config })
  },
}
