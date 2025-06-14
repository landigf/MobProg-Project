import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SectionCard } from '@/components';

import { getTabContentBottomPadding } from '@/constants/layout';
import { BorderRadius, Colors, CommonStyles, Spacing, Typography } from '@/constants/styles';

export default function ProfiloScreen() {
  const insets = useSafeAreaInsets();

  // Add haptic feedback when tab is focused
  useFocusEffect(
    useCallback(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }, [])
  );

  // Haptic feedback wrapper functions for menu navigation
  const handleStatistics = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(screens)/statistics');
  };

  const handleFavorites = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(screens)/favorites');
  };

  const handleWishlist = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(screens)/wishlist');
  };

  const handleSettings = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(screens)/settings');
  };

  return (
    <View style={CommonStyles.container}>
      <ScrollView 
        contentContainerStyle={[
          CommonStyles.contentContainer,
          {
            paddingTop: 0,
            paddingBottom: getTabContentBottomPadding(insets.bottom)
          }
        ]}
      >
        {/* Header */}
        <View style={[CommonStyles.header, { marginTop: insets.top }]}>
          <View style={CommonStyles.headerTop}>
            <View>
              <Text style={CommonStyles.title}>Profilo</Text>
              <Text style={CommonStyles.subtitle}>
                &quot;Ground control to Major Tom&quot;
              </Text>
            </View>
          </View>
        </View>

        {/* Menu di navigazione */}

        <SectionCard title="Strumenti">
          <View style={styles.menuGrid}>
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={handleStatistics}
            >
              <View style={[styles.menuIcon, { backgroundColor: Colors.info + '15' }]}>
                <Ionicons name="stats-chart" size={28} color={Colors.info} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Statistiche</Text>
                <Text style={styles.menuSubtitle}>Analisi dettagliate delle tue letture</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={handleFavorites}
            >
              <View style={[styles.menuIcon, { backgroundColor: Colors.accent + '15' }]}>
                <Ionicons name="heart" size={28} color={Colors.accent} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Preferiti</Text>
                <Text style={styles.menuSubtitle}>I tuoi libri del cuore</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={handleWishlist}
            >
              <View style={[styles.menuIcon, { backgroundColor: Colors.secondary + '15' }]}>
                <Ionicons name="cart" size={28} color={Colors.secondary} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Wishlist</Text>
                <Text style={styles.menuSubtitle}>I libri che desideri leggere</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>

          </View>
        </SectionCard>

        <SectionCard title="Personalizzazione">
          <View style={styles.menuGrid}>
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={handleSettings}
            >
              <View style={[styles.menuIcon, { backgroundColor: Colors.accentSecondary + '15' }]}>
                <Ionicons name="settings" size={28} color={Colors.accentSecondary} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Impostazioni</Text>
                <Text style={styles.menuSubtitle}>Personalizza la tua esperienza</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </SectionCard>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menuGrid: {
    gap: Spacing.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    marginBottom: Spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  menuIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.xl,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  menuSubtitle: {
    fontSize: Typography.fontSize.md,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  quickAction: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  quickActionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  quickActionText: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 2,
    borderColor: Colors.primary + '20',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.xl,
    borderWidth: 2,
    borderColor: Colors.primary + '30',
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  infoText: {
    fontSize: Typography.fontSize.lg,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
});
