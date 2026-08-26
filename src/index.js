/**
 * Hacker — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 */

const TOKENS = {
  '--bg-base': '#030805',
  '--bg-surface': '#07110b',
  '--bg-elevated': '#0c1a12',
  '--bg-inset': '#020503',
  '--bg-hover': 'rgba(125, 255, 154, 0.07)',
  '--bg-active': 'rgba(125, 255, 154, 0.12)',
  '--text-primary': '#7dff9a',
  '--text-secondary': 'rgba(125, 255, 154, 0.74)',
  '--text-muted': 'rgba(125, 255, 154, 0.5)',
  '--text-faint': 'rgba(125, 255, 154, 0.32)',
  '--border': 'rgba(125, 255, 154, 0.14)',
  '--border-subtle': 'rgba(125, 255, 154, 0.07)',
  '--border-strong': 'rgba(125, 255, 154, 0.22)',
  '--accent': '#3dff7a',
  '--accent-hover': '#6aff9c',
  '--accent-muted': 'rgba(61, 255, 122, 0.2)',
  '--accent-subtle': 'rgba(61, 255, 122, 0.1)',
  '--glass-bg': 'rgba(3, 8, 5, 0.92)',
  '--glass-border': 'rgba(125, 255, 154, 0.12)',
  '--glass-bg-menu': 'rgba(12, 26, 18, 0.96)',
  '--glass-border-menu': 'rgba(125, 255, 154, 0.12)',
  '--status-active': '#3dff7a',
  '--status-on-hold': '#c8e05a',
  '--status-completed': '#5ad47a',
  '--status-dropped': '#e05a6a',
};

module.exports = {
  id: 'theme-hacker',
  name: 'Hacker',
  version: '0.1.0',
  description: 'Green-on-black terminal. Classic hacker phosphor, not amber CRT.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-hacker',
      name: 'Hacker',
      description: "Root shell after midnight. Matrix-green ink on true dark, not Phosphor's amber, not Pine's forest.",
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
