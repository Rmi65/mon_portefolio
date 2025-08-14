// tests/Portfolio.test.js
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Portfolio from '@/components/Portfolio.vue' // Ajuste le chemin selon ta structure

describe('Portfolio Component', () => {

  it('renders correctly', () => {
    const wrapper = mount(Portfolio)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the developer name and title', () => {
    const wrapper = mount(Portfolio)

    expect(wrapper.find('h3').text()).toBe('Lionel Sabattier')
    expect(wrapper.find('.dev').text()).toBe('Développeur web fullstack / Designer')
  })

  it('renders navigation links correctly', () => {
    const wrapper = mount(Portfolio, {
      global: {
        stubs: ['router-link'] // Mock router-link pour éviter les erreurs
      }
    })

    const navLinks = wrapper.findAll('.nav-links a')
    expect(navLinks.length).toBeGreaterThan(0)

    // Vérifier les liens externes
    const linkedInLink = navLinks.find(link =>
      link.attributes('href')?.includes('linkedin.com')
    )
    expect(linkedInLink?.attributes('target')).toBe('_blank')
  })

  it('displays project information correctly', () => {
    const wrapper = mount(Portfolio)

    // Test du projet Polaris Vacances
    expect(wrapper.text()).toContain('POLARIS VACANCES')
    expect(wrapper.text()).toContain('Plateforme de réservation')
    expect(wrapper.text()).toContain('React / MUI / Laravel / Mysql / Apache')

    // Test du projet NAE LABS
    expect(wrapper.text()).toContain('NAE LABS')
    expect(wrapper.text()).toContain('Vue.js / Spring boot / PostgreSQL / Nginx / Inkscape')
  })

  it('has proper video elements', () => {
    const wrapper = mount(Portfolio)

    const videos = wrapper.findAll('video')
    expect(videos.length).toBe(2)

    videos.forEach(video => {
      expect(video.attributes('controls')).toBeDefined()
      expect(video.attributes('width')).toBe('300')
      expect(video.attributes('height')).toBe('200')
    })
  })

  it('applies correct CSS classes for animations', () => {
    const wrapper = mount(Portfolio)

    expect(wrapper.find('.navbar').classes()).toContain('fade-in-down')
    expect(wrapper.find('.presentation').classes()).toContain('fade-in-left')
    expect(wrapper.find('.theme').classes()).toContain('fade-in-right')
  })

  it('renders upcoming projects list', () => {
    const wrapper = mount(Portfolio)

    expect(wrapper.text()).toContain('Prochainement :')
    expect(wrapper.text()).toContain('Site pour un Centre Equestre')
    expect(wrapper.text()).toContain('Site pour une Créatrice de Bijoux')
  })

  // Test des interactions
  it('handles navigation link hover effects', async () => {
    const wrapper = mount(Portfolio, {
      global: {
        stubs: ['router-link']
      }
    })

    const navLink = wrapper.find('.nav-links .nav')
    expect(navLink.exists()).toBe(true)
  })
})

// Tests pour les animations CSS
describe('Portfolio Animations', () => {
  it('has keyframe animations defined', () => {
    const wrapper = mount(Portfolio)
    const style = wrapper.find('style').text()

    expect(style).toContain('@keyframes fadeInDown')
    expect(style).toContain('@keyframes fadeInLeft')
    expect(style).toContain('@keyframes fadeInRight')
  })
})

// Tests de responsive design
describe('Portfolio Responsive', () => {
  it('has mobile-friendly media queries', () => {
    const wrapper = mount(Portfolio)
    const style = wrapper.find('style').text()

    expect(style).toContain('@media (max-width: 768px)')
    expect(style).toContain('@media (prefers-reduced-motion: reduce)')
  })
})
