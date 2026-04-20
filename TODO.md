# Deployment to Netlify

## Steps
- [x] Ensure build succeeds (fix TypeScript errors first)
- [ ] Run `npm run build`
- [ ] Run `netlify deploy --dir=dist --prod`
- [ ] Update README.md with live URL
- [ ] Complete deployment

**Current Issue:** TypeScript errors in src/App.fixed.tsx line 40 (unterminated string due to unescaped single quote in 'Time Net cafe\'s'). Need to fix App.tsx or remove App.fixed.tsx reference.

**Next:** Fix code, rebuild, deploy.

