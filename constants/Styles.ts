import colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ─────────────────────────────
  // Layout
  // ─────────────────────────────

  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 16,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flex: {
    flex: 1,
  },

  // ─────────────────────────────
  // Typography
  // ─────────────────────────────

  header: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.text,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },

  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 20,
    marginBottom: 10,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },

  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: colors.textSecondary,
  },

  caption: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textTertiary,
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: colors.text,
  },

  textLink: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },

  textMuted: {
    color: colors.textMuted,
  },

  textSecondary: {
    color: colors.textSecondary,
  },

  textInverse: {
    color: colors.textInverse,
  },

  // ─────────────────────────────
  // Buttons
  // ─────────────────────────────

  pillButton: {
    height: 60,
    paddingHorizontal: 24,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  pillButtonSmall: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  button: {
    height: 52,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  buttonOutline: {
    height: 52,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.backgroundSecondary,
  },

  buttonSecondary: {
    height: 52,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray100,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: colors.textInverse,
    fontSize: 16,
    fontWeight: '600',
  },

  buttonTextSmall: {
    color: colors.textInverse,
    fontSize: 14,
    fontWeight: '600',
  },

  buttonTextOutline: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },

  // ─────────────────────────────
  // Cards
  // ─────────────────────────────

  card: {
    padding: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 16,
  },

  cardSmall: {
    padding: 12,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 12,
  },

  cardOutlined: {
    padding: 16,
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
  },

  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: colors.textInverse,
    borderRadius: 16,
    gap: 20,
  },

  // ─────────────────────────────
  // Inputs
  // ─────────────────────────────

  inputContainer: {
    marginBottom: 16,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
  },

  input: {
    height: 52,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 12,
    backgroundColor: colors.inputBackground,
    color: colors.inputText,
    fontSize: 16,
  },

  inputFocused: {
    borderColor: colors.inputBorderFocused,
  },

  inputError: {
    borderColor: colors.inputBorderError,
  },

  inputDisabled: {
    backgroundColor: colors.inputDisabled,
    opacity: 0.6,
  },

  inputErrorText: {
    marginTop: 5,
    fontSize: 12,
    color: colors.error,
  },

  inputHelperText: {
    marginTop: 5,
    fontSize: 12,
    color: colors.textTertiary,
  },

  // ─────────────────────────────
  // Lists
  // ─────────────────────────────

  list: {
    gap: 12,
  },

  listItem: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 12,
  },

  listItemContent: {
    flex: 1,
    marginLeft: 12,
  },

  listItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },

  listItemSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: colors.textSecondary,
  },

  // ─────────────────────────────
  // Avatar / Icons
  // ─────────────────────────────

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryMuted,
  },

  avatarSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryMuted,
  },

  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray100,
  },

  // ─────────────────────────────
  // Separators
  // ─────────────────────────────

  divider: {
    height: 1,
    backgroundColor: colors.divider,
  },

  dividerVertical: {
    width: 1,
    backgroundColor: colors.divider,
  },

  // ─────────────────────────────
  // Status
  // ─────────────────────────────

  successText: {
    color: colors.success,
  },

  errorText: {
    color: colors.error,
  },

  warningText: {
    color: colors.warning,
  },

  infoText: {
    color: colors.info,
  },

  successBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: colors.successLight,
  },

  errorBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: colors.errorLight,
  },

  warningBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: colors.warningLight,
  },

  // ─────────────────────────────
  // Empty / Loading states
  // ─────────────────────────────

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },

  emptyTitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },

  emptyDescription: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  // ─────────────────────────────
  // Spacing
  // ─────────────────────────────

  marginTopSmall: {
    marginTop: 8,
  },

  marginTopMedium: {
    marginTop: 16,
  },

  marginTopLarge: {
    marginTop: 24,
  },

  marginBottomSmall: {
    marginBottom: 8,
  },

  marginBottomMedium: {
    marginBottom: 16,
  },

  marginBottomLarge: {
    marginBottom: 24,
  },

  paddingSmall: {
    padding: 8,
  },

  paddingMedium: {
    padding: 16,
  },

  paddingLarge: {
    padding: 24,
  },
});

export default styles;
