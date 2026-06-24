import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Platform, StatusBar as RNStatusBar, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { 
  Droplet, Thermometer, Sun, Wifi, Navigation, Home, Calendar, 
  BarChart2, Settings, ChevronLeft, AlertTriangle, ShowerHead, Lightbulb,
  Bell, Cpu, Battery, Sliders, ChevronRight, Info
} from 'lucide-react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home'); // 'Home', 'Growth', 'Stats', 'Settings'
  
  // States สำหรับหน้าตั้งค่า (Settings)
  const [autoWater, setAutoWater] = useState(true);
  const [alertSun, setAlertSun] = useState(true);
  const [alertWater, setAlertWater] = useState(false);

  // ==========================================
  // 1. หน้าหลัก (Home Screen)
  // ==========================================
  const HomeScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoLeaf}>🍃</Text>
          <Text style={styles.logoText}>SALAD PAK</Text>
        </View>
        <TouchableOpacity style={styles.dropdownButton}>
          <Text style={styles.dropdownText}>My Green Oak</Text>
          <Text style={styles.dropdownArrow}> ∨</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <View style={styles.greenDot} />
          <Text style={styles.statusTitle}>สถานะ: ปกติ</Text>
        </View>
        <Text style={styles.statusHighlight}>น้องผักแข็งแรงดี 🌱</Text>
        <Text style={styles.statusSub}>ระบบอัตโนมัติกำลังทำงาน</Text>
      </View>

      <Text style={styles.sectionTitle}>สภาพแวดล้อมปัจจุบัน</Text>

      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
          <View style={styles.infoCard}><Droplet size={28} color="#34a8da" /><Text style={styles.cardValue}>65%</Text><Text style={styles.cardLabel}>ความชื้นในดิน</Text></View>
          <View style={styles.infoCard}><Thermometer size={28} color="#ff4d6d" /><Text style={styles.cardValue}>32°C</Text><Text style={styles.cardLabel}>อุณหภูมิ</Text></View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.infoCard}><Sun size={28} color="#fca311" /><Text style={styles.cardValue}>High</Text><Text style={styles.cardLabel}>ความเข้มแสง</Text></View>
          <View style={styles.infoCard}><Wifi size={28} color="#2a6f97" /><Text style={styles.cardValue}>Online</Text><Text style={styles.cardLabel}>สถานะระบบ</Text></View>
        </View>
      </View>

      <TouchableOpacity style={styles.waterButton} activeOpacity={0.8}>
        <View style={styles.waterButtonContent}>
          <View style={{ transform: [{ rotate: '45deg' }], marginRight: 8 }}><Navigation size={18} color="#ffffff" fill="#ffffff" /></View>
          <Text style={styles.waterButtonText}>สั่งรดน้ำทันที</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );

  // ==========================================
  // 2. หน้าการเติบโต (Growth Screen)
  // ==========================================
  const GrowthScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.statsHeaderNav}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.backButton}>
          <ChevronLeft size={24} color="#1b4332" />
          <Text style={styles.backButtonText}>ย้อนกลับ</Text>
        </TouchableOpacity>
        <Text style={styles.statsHeaderText}>การเติบโต</Text>
        <View style={{ width: 100 }} />
      </View>

      <View style={styles.plantInfoCard}>
        <View style={styles.plantIconBox}><Text style={{ fontSize: 24 }}>🌱</Text></View>
        <View style={styles.plantInfoContent}>
          <Text style={styles.plantNameText}>กรีนโอ๊ค (Green Oak)</Text>
          <Text style={styles.plantSubText}>เริ่มปลูก: 1 ม.ค. 67</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>เส้นทางผักสลัด</Text>

      <View style={styles.timelineContainer}>
        <View style={styles.timelineItem}>
          <View style={styles.timelineLeft}>
            <View style={[styles.timelineDot, { borderColor: '#1b4332', backgroundColor: '#fff' }]}><View style={[styles.timelineDotInner, { backgroundColor: '#1b4332' }]} /></View>
            <View style={[styles.timelineLine, { backgroundColor: '#1b4332' }]} />
          </View>
          <View style={styles.timelineRight}>
            <Text style={styles.timelineDateDone}>1 ม.ค. 67</Text>
            <Text style={styles.timelineTitleActive}>ระยะเพาะเมล็ด 🌱</Text>
            <Text style={styles.timelineDetails}>นำเมล็ดลงฟองน้ำและรักษาความชื้น</Text>
          </View>
        </View>

        <View style={styles.timelineItem}>
          <View style={styles.timelineLeft}>
            <View style={[styles.timelineDot, { borderColor: '#1b4332', backgroundColor: '#fff' }]}><View style={[styles.timelineDotInner, { backgroundColor: '#1b4332' }]} /></View>
            <View style={[styles.timelineLine, { backgroundColor: '#1b4332' }]} />
          </View>
          <View style={styles.timelineRight}>
            <Text style={styles.timelineDateDone}>7 ม.ค. 67</Text>
            <Text style={styles.timelineTitleActive}>ระยะอนุบาล 🌿</Text>
            <Text style={styles.timelineDetails}>ย้ายลงถาดเพาะ เริ่มให้แสงอ่อนๆ</Text>
          </View>
        </View>

        <View style={styles.timelineItem}>
          <View style={styles.timelineLeft}>
            <View style={[styles.timelineDot, { borderColor: '#fca311', backgroundColor: '#fff' }]}><View style={[styles.timelineDotInner, { backgroundColor: '#fca311' }]} /></View>
            <View style={[styles.timelineLine, { backgroundColor: '#cbd5e1' }]} />
          </View>
          <View style={styles.timelineRight}>
            <Text style={styles.timelineDateCurrent}>วันนี้ (วันที่ 25)</Text>
            <Text style={styles.timelineTitleActive}>ระยะเจริญเติบโต 🌲</Text>
            <Text style={styles.timelineDetails}>ต้องการแสงแดด 4-6 ชม./วัน ระบบกำลังดูแลอย่างใกล้ชิด</Text>
          </View>
        </View>

        <View style={[styles.timelineItem, { marginBottom: 0 }]}>
          <View style={styles.timelineLeft}><View style={[styles.timelineDot, { borderColor: '#cbd5e1', backgroundColor: '#fff' }]} /></View>
          <View style={styles.timelineRight}>
            <Text style={styles.timelineDateFuture}>~15 ก.พ. 67</Text>
            <Text style={styles.timelineTitleFuture}>เก็บเกี่ยว 🧺</Text>
            <Text style={styles.timelineDetailsFuture}>พร้อมรับประทาน</Text>
          </View>
        </View>
      </View>

      <View style={styles.tipCard}>
        <View style={styles.tipHeader}><Lightbulb size={18} color="#b58209" fill="#b58209" /><Text style={styles.tipTitleText}>เคล็ดลับช่วงนี้:</Text></View>
        <Text style={styles.tipBodyText}>ช่วงสัปดาห์นี้ผักต้องการไนโตรเจนสูงเป็นพิเศษ ควรตรวจสอบค่าน้ำและปุ๋ยสม่ำเสมอครับ</Text>
      </View>
    </ScrollView>
  );

  // ==========================================
  // 3. หน้าสถิติ (Stats Screen)
  // ==========================================
  const StatsScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.statsHeaderNav}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.backButton}>
          <ChevronLeft size={24} color="#1b4332" />
          <Text style={styles.backButtonText}>ย้อนกลับ</Text>
        </TouchableOpacity>
        <Text style={styles.statsHeaderText}>ข้อมูลเชิงลึก</Text>
        <View style={{ width: 100 }} />
      </View>

      <View style={styles.tabSelector}>
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}><Text style={[styles.tabText, styles.tabTextActive]}>ความชื้น</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>อุณหภูมิ</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>แสงแดด</Text></TouchableOpacity>
      </View>

      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>ความชื้นในดิน (เฉลี่ย)</Text>
        <View style={styles.chartValueRow}>
          <Text style={styles.chartValueText}>62%</Text>
          <Text style={styles.chartValueSubText}>(+2%)</Text>
        </View>
        
        <View style={styles.svgContainer}>
          <Svg height="120" width="100%">
            <Path d="M0,80 Q50,85 100,70 T200,90 T350,50" fill="none" stroke="#2d6a4f" strokeWidth="3" />
            <Circle cx="230" cy="78" r="5" fill="white" stroke="#2d6a4f" strokeWidth="2" />
          </Svg>
          <View style={styles.chartLabels}>
            <Text style={styles.chartTimeLabel}>06:00</Text>
            <Text style={styles.chartTimeLabel}>12:00</Text>
            <Text style={styles.chartTimeLabel}>18:00</Text>
          </View>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>ประวัติการแจ้งเตือน</Text>
      
      <View style={styles.alertList}>
        <View style={styles.alertItem}>
          <View style={[styles.alertIconBox, { backgroundColor: '#ffe5ec' }]}><AlertTriangle size={20} color="#ff4d6d" /></View>
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>ความร้อนสูงเกิน!</Text>
            <Text style={styles.alertTime}>13:45 น. - อุณหภูมิแตะ 36°C แนะนำให้บังแดด</Text>
          </View>
        </View>

        <View style={styles.alertItem}>
          <View style={[styles.alertIconBox, { backgroundColor: '#e0f2fe' }]}><ShowerHead size={20} color="#0284c7" /></View>
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>รดน้ำอัตโนมัติ</Text>
            <Text style={styles.alertTime}>12:00 น. - ความชื้นต่ำกว่ากำหนด</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  // ==========================================
  // 4. หน้าตั้งค่า (Settings Screen) **[มาใหม่]**
  // ==========================================
  const SettingsScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.statsHeaderNav}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.backButton}>
          <ChevronLeft size={24} color="#1b4332" />
          <Text style={styles.backButtonText}>ย้อนกลับ</Text>
        </TouchableOpacity>
        <Text style={styles.statsHeaderText}>ตั้งค่าระบบ</Text>
        <View style={{ width: 100 }} />
      </View>

      {/* กลุ่มที่ 1: ควบคุมระบบฟาร์ม */}
      <Text style={styles.settingsGroupTitle}>การควบคุมบอร์ด</Text>
      <View style={styles.settingsCard}>
        {/* แถวสวิตช์รดน้ำ */}
        <View style={styles.settingsRow}>
          <View style={styles.settingsRowLeft}>
            <View style={[styles.settingsIconBg, { backgroundColor: '#e8f5e9' }]}><Sliders size={18} color="#2d6a4f" /></View>
            <View>
              <Text style={styles.settingsItemText}>รดน้ำอัตโนมัติ</Text>
              <Text style={styles.settingsItemSub}>ให้ระบบทำงานเมื่อดินแห้ง</Text>
            </View>
          </View>
          <Switch 
            value={autoWater} 
            onValueChange={setAutoWater}
            trackColor={{ false: '#cbd5e1', true: '#52b788' }}
            thumbColor={autoWater ? '#2d6a4f' : '#f4f3f4'}
          />
        </View>
        
        {/* แถวระดับความชื้นเป้าหมาย */}
        <View style={[styles.settingsRow, { borderBottomWidth: 0, paddingBottom: 0 }]}>
          <View style={styles.settingsRowLeft}>
            <View style={[styles.settingsIconBg, { backgroundColor: '#e0f2fe' }]}><Droplet size={18} color="#0284c7" /></View>
            <View>
              <Text style={styles.settingsItemText}>ตั้งค่าความชื้นเป้าหมาย</Text>
              <Text style={styles.settingsItemSub}>รดน้ำเมื่อต่ำกว่าคงที่: 60%</Text>
            </View>
          </View>
          <ChevronRight size={18} color="#cbd5e1" />
        </View>
      </View>

      {/* กลุ่มที่ 2: ระบบแจ้งเตือน */}
      <Text style={styles.settingsGroupTitle}>การแจ้งเตือนบนมือถือ</Text>
      <View style={styles.settingsCard}>
        <View style={styles.settingsRow}>
          <View style={styles.settingsRowLeft}>
            <View style={[styles.settingsIconBg, { backgroundColor: '#fff7ed' }]}><Bell size={18} color="#ea580c" /></View>
            <Text style={styles.settingsItemText}>เตือนเมื่อแดดจัดเกินไป</Text>
          </View>
          <Switch value={alertSun} onValueChange={setAlertSun} trackColor={{ false: '#cbd5e1', true: '#52b788' }} thumbColor={alertSun ? '#2d6a4f' : '#f4f3f4'} />
        </View>

        <View style={[styles.settingsRow, { borderBottomWidth: 0, paddingBottom: 0 }]}>
          <View style={styles.settingsRowLeft}>
            <View style={[styles.settingsIconBg, { backgroundColor: '#ffe5ec' }]}><AlertTriangle size={18} color="#ff4d6d" /></View>
            <Text style={styles.settingsItemText}>เตือนเมื่อน้ำในถังหมด</Text>
          </View>
          <Switch value={alertWater} onValueChange={setAlertWater} trackColor={{ false: '#cbd5e1', true: '#52b788' }} thumbColor={alertWater ? '#2d6a4f' : '#f4f3f4'} />
        </View>
      </View>

      {/* กลุ่มที่ 3: ข้อมูลฮาร์ดแวร์ */}
      <Text style={styles.settingsGroupTitle}>สถานะอุปกรณ์ฮาร์ดแวร์</Text>
      <View style={styles.settingsCard}>
        <View style={styles.settingsRow}>
          <View style={styles.settingsRowLeft}>
            <View style={[styles.settingsIconBg, { backgroundColor: '#f1f5f9' }]}><Cpu size={18} color="#475569" /></View>
            <Text style={styles.settingsItemText}>ชื่อบอร์ดคอนโทรล</Text>
          </View>
          <Text style={styles.settingsValueText}>ESP32-SaladPak v2</Text>
        </View>

        <View style={styles.settingsRow}>
          <View style={styles.settingsRowLeft}>
            <View style={[styles.settingsIconBg, { backgroundColor: '#f0fdf4' }]}><Battery size={18} color="#16a34a" /></View>
            <Text style={styles.settingsItemText}>แบตเตอรี่กล่องระบบ</Text>
          </View>
          <Text style={styles.settingsValueText}>84% (ปกติ)</Text>
        </View>

        <View style={[styles.settingsRow, { borderBottomWidth: 0, paddingBottom: 0 }]}>
          <View style={styles.settingsRowLeft}>
            <View style={[styles.settingsIconBg, { backgroundColor: '#e0f2fe' }]}><Wifi size={18} color="#0284c7" /></View>
            <Text style={styles.settingsItemText}>สัญญาณ Wi-Fi</Text>
          </View>
          <Text style={styles.settingsValueText}>ดีเยี่ยม (-54dBm)</Text>
        </View>
      </View>

      {/* เวอร์ชันของแอป */}
      <View style={styles.appVersionContainer}>
        <Info size={14} color="#a3b19b" />
        <Text style={styles.appVersionText}> SALAD PAK App — เวอร์ชัน 1.0.0 (Beta)</Text>
      </View>
    </ScrollView>
  );

  // ==========================================
  // ส่วนควบคุม Bottom Nav
  // ==========================================
  const AppContent = () => (
    <View style={styles.appInnerContainer}>
      <StatusBar style="dark" />
      
      {currentScreen === 'Home' && <HomeScreen />}
      {currentScreen === 'Growth' && <GrowthScreen />}
      {currentScreen === 'Stats' && <StatsScreen />}
      {currentScreen === 'Settings' && <SettingsScreen />}
      
      {/* แถบนำทางด้านล่าง */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('Home')}>
          <Home size={22} color={currentScreen === 'Home' ? "#2d6a4f" : "#a3b19b"} />
          <Text style={[styles.navText, currentScreen === 'Home' && styles.navTextActive]}>หน้าหลัก</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('Growth')}>
          <Calendar size={22} color={currentScreen === 'Growth' ? "#2d6a4f" : "#a3b19b"} />
          <Text style={[styles.navText, currentScreen === 'Growth' && styles.navTextActive]}>การเติบโต</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('Stats')}>
          <BarChart2 size={22} color={currentScreen === 'Stats' ? "#2d6a4f" : "#a3b19b"} />
          <Text style={[styles.navText, currentScreen === 'Stats' && styles.navTextActive]}>สถิติ</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => setCurrentScreen('Settings')}>
          <Settings size={22} color={currentScreen === 'Settings' ? "#2d6a4f" : "#a3b19b"} />
          <Text style={[styles.navText, currentScreen === 'Settings' && styles.navTextActive]}>ตั้งค่า</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webBackground}>
        <View style={styles.phoneWrapper}>
          <SafeAreaView style={styles.safeArea}><AppContent /></SafeAreaView>
        </View>
      </View>
    );
  }

  return <SafeAreaView style={styles.safeArea}><AppContent /></SafeAreaView>;
}

// ==========================================
// สไตล์ทั้งหมด (Styles)
// ==========================================
const styles = StyleSheet.create({
  webBackground: {
    flex: 1, backgroundColor: '#eef2f5', justifyContent: 'center', alignItems: 'center',
    ...Platform.select({ web: { width: '100vw', height: '100vh' } })
  },
  phoneWrapper: {
    width: 390, height: 844, backgroundColor: '#f8fbf9', borderRadius: 44, borderWidth: 10, borderColor: '#1a1a1a', overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.1, shadowRadius: 30, elevation: 10,
  },
  safeArea: { flex: 1, backgroundColor: '#f8fbf9', paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0 },
  appInnerContainer: { flex: 1 },
  scrollContainer: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 100 },
  
  // Header ส่วนหัวทั่วไป
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoLeaf: { fontSize: 18, marginRight: 6 },
  logoText: { fontSize: 20, fontWeight: '800', color: '#1e4d34' },
  dropdownButton: { flexDirection: 'row', alignItems: 'center' },
  dropdownText: { fontSize: 14, color: '#52b788', fontWeight: '600' },
  dropdownArrow: { fontSize: 10, color: '#52b788' },

  // Header แบบย้อนกลับ
  statsHeaderNav: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backButtonText: { fontSize: 16, fontWeight: 'bold', color: '#1b4332', marginLeft: 4 },
  statsHeaderText: { fontSize: 18, fontWeight: '800', color: '#1e4d34', marginLeft: 35 },

  // หน้าจอหลัก (Home) Elements
  statusCard: { backgroundColor: '#c7eed8', borderRadius: 20, padding: 22, marginBottom: 25 },
  statusHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  greenDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#2dc653', marginRight: 8 },
  statusTitle: { fontSize: 14, fontWeight: '700', color: '#1b4332' },
  statusHighlight: { fontSize: 22, fontWeight: 'bold', color: '#112f22', marginBottom: 5 },
  statusSub: { fontSize: 12, color: '#40916c' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#2d3748', marginBottom: 15 },
  gridContainer: { width: '100%' },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  infoCard: { backgroundColor: '#fff', width: '48%', borderRadius: 16, paddingVertical: 20, alignItems: 'center', borderWidth: 1, borderColor: '#f1f5f2' },
  cardValue: { fontSize: 18, fontWeight: 'bold', color: '#1b4332', marginTop: 8 },
  cardLabel: { fontSize: 11, color: '#8a9a86' },

  // หน้าการเติบโต (Growth) Elements
  plantInfoCard: { flexDirection: 'row', backgroundColor: '#f1f6f2', borderRadius: 16, padding: 16, marginBottom: 25 },
  plantIconBox: { width: 50, height: 50, borderRadius: 12, backgroundColor: '#c7eed8', justifyContent: 'center', alignItems: 'center' },
  plantInfoContent: { marginLeft: 15, justifyContent: 'center' },
  plantNameText: { fontSize: 16, fontWeight: 'bold', color: '#1b4332' },
  plantSubText: { fontSize: 12, color: '#8a9a86', marginTop: 2 },
  timelineContainer: { paddingLeft: 10, marginBottom: 25 },
  timelineItem: { flexDirection: 'row', marginBottom: 5 },
  timelineLeft: { alignItems: 'center', marginRight: 15 },
  timelineDot: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, justifyContent: 'center', alignItems: 'center', zIndex: 2 },
  timelineDotInner: { width: 10, height: 10, borderRadius: 5 },
  timelineLine: { width: 2, flex: 1, marginTop: -2, zIndex: 1, minHeight: 55 },
  timelineRight: { flex: 1, paddingTop: 1, paddingBottom: 15 },
  timelineDateDone: { fontSize: 12, color: '#a3b19b', fontWeight: '600' },
  timelineDateCurrent: { fontSize: 12, color: '#fca311', fontWeight: '700' },
  timelineDateFuture: { fontSize: 12, color: '#cbd5e1', fontWeight: '600' },
  timelineTitleActive: { fontSize: 15, fontWeight: 'bold', color: '#1b4332', marginTop: 2 },
  timelineTitleFuture: { fontSize: 15, fontWeight: 'bold', color: '#cbd5e1', marginTop: 2 },
  timelineDetails: { fontSize: 13, color: '#667085', marginTop: 4 },
  timelineDetailsFuture: { fontSize: 13, color: '#cbd5e1', marginTop: 4 },
  tipCard: { backgroundColor: '#fef9c3', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#fef08a' },
  tipHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  tipTitleText: { fontSize: 14, fontWeight: 'bold', color: '#854d0e', marginLeft: 6 },
  tipBodyText: { fontSize: 13, color: '#713f12', lineHeight: 18 },

  // หน้าสถิติ (Stats) Elements
  tabSelector: { flexDirection: 'row', backgroundColor: '#f0f4f1', borderRadius: 12, padding: 4, marginBottom: 20 },
  tabItem: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  tabItemActive: { backgroundColor: '#fff', elevation: 2, shadowOpacity: 0.05 },
  tabText: { fontSize: 14, color: '#8a9a86', fontWeight: '600' },
  tabTextActive: { color: '#1b4332' },
  chartCard: { backgroundColor: '#fff', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#f1f5f2' },
  chartTitle: { fontSize: 14, color: '#8a9a86', fontWeight: '600' },
  chartValueRow: { flexDirection: 'row', alignItems: 'flex-end', marginTop: 10, marginBottom: 15 },
  chartValueText: { fontSize: 32, fontWeight: '800', color: '#1b4332' },
  chartValueSubText: { fontSize: 16, fontWeight: 'bold', color: '#52b788', marginLeft: 8, marginBottom: 6 },
  svgContainer: { height: 130, width: '100%', marginTop: 10 },
  chartLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  chartTimeLabel: { fontSize: 11, color: '#a3b19b' },
  alertList: { marginTop: 10 },
  alertItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#f1f5f2' },
  alertIconBox: { width: 45, height: 45, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  alertContent: { flex: 1, marginLeft: 15 },
  alertTitle: { fontSize: 15, fontWeight: 'bold', color: '#1b4332' },
  alertTime: { fontSize: 12, color: '#8a9a86', marginTop: 2 },

  // หน้าตั้งค่า (Settings) Elements **[มาใหม่]**
  settingsGroupTitle: { fontSize: 14, fontWeight: '700', color: '#8a9a86', marginTop: 20, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
  settingsCard: { backgroundColor: '#fff', borderRadius: 20, padding: 18, borderWidth: 1, borderColor: '#f1f5f2' },
  settingsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 15, marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#f8faf9' },
  settingsRowLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  settingsIconBg: { width: 36, height: 36, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  settingsItemText: { fontSize: 15, fontWeight: '600', color: '#1b4332' },
  settingsItemSub: { fontSize: 12, color: '#8a9a86', marginTop: 2 },
  settingsValueText: { fontSize: 14, fontWeight: '600', color: '#475569' },
  appVersionContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 10 },
  appVersionText: { fontSize: 11, color: '#a3b19b', fontWeight: '500' },

  // ปุ่มรดน้ำ
  waterButton: { backgroundColor: '#2d6a4f', borderRadius: 16, paddingVertical: 16, alignItems: 'center', marginTop: 10 },
  waterButtonContent: { flexDirection: 'row', alignItems: 'center' },
  waterButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  // เมนูด้านล่าง
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#f1f5f2' },
  navItem: { alignItems: 'center', flex: 1, paddingVertical: 2 },
  navText: { fontSize: 10, color: '#a3b19b', marginTop: 4 },
  navTextActive: { color: '#2d6a4f', fontWeight: '700' },
});