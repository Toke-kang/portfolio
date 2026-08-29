const storageKey = "portfolioDataV1";
const authKey = "portfolioAuthV1";
const uiKey = "portfolioUiV1";
const pageMode = document.body.dataset.page || "viewer";

const i18n = {
  zh: {
    siteTitle: "我的作品集",
    siteSubtitle: "支持视频、图片、WebP、XML、JSON 的一体化展示",
    editorTitle: "作品编辑后台",
    editorSubtitle: "仅用于维护数据，展示请打开 viewer.html",
    heroKicker: "创意展示",
    language: "语言",
    themeLabel: "风格",
    themeBehance: "Behance",
    themeMinimal: "极简",
    themeDark: "深色",
    editStatusTitle: "编辑状态",
    unlockPasswordPlaceholder: "输入编辑密码",
    unlockBtn: "进入编辑",
    lockBtn: "退出编辑",
    setPassword: "设置编辑密码",
    passwordMin: "至少 4 位",
    confirmPassword: "确认密码",
    confirmPasswordPlaceholder: "再次输入密码",
    savePassword: "保存密码",
    exportData: "导出数据",
    importData: "导入数据",
    aboutTitle: "个人简介",
    name: "姓名",
    namePlaceholder: "例如：张三",
    bio: "简介",
    bioPlaceholder: "介绍你的职业方向和优势",
    saveAbout: "保存个人简介",
    contactTitle: "联系方式",
    email: "邮箱",
    phone: "电话",
    social: "社交链接",
    saveContact: "保存联系方式",
    experienceTitle: "工作经历",
    company: "公司",
    companyPlaceholder: "公司名称",
    role: "职位",
    rolePlaceholder: "职位名称",
    startDate: "开始时间",
    endDate: "结束时间",
    jobDesc: "工作内容",
    jobDescPlaceholder: "负责内容、成果等",
    addExperience: "添加工作经历",
    updateExperience: "更新工作经历",
    cancelEdit: "取消编辑",
    workTitle: "作品展示",
    softwareTitle: "个人软件能力",
    softwareSkills: "软件能力（逗号分隔）",
    softwarePlaceholder: "例如：After Effects, Photoshop, Figma",
    projectRole: "承担角色",
    usedSoftware: "使用软件",
    detailTitle: "作品详情",
    openDetail: "查看详情",
    closeModal: "关闭",
    filter: "筛选",
    all: "全部",
    video: "视频",
    image: "图片",
    searchPlaceholder: "搜索作品标题",
    title: "标题",
    titlePlaceholder: "作品标题",
    type: "类型",
    resourceUrl: "资源地址（URL）",
    resourcePlaceholder: "https://... 或 ./assets/demo.mp4",
    workDesc: "作品说明",
    optional: "可选",
    addWork: "添加作品",
    updateWork: "更新作品",
    noExperience: "暂无工作经历。",
    noWork: "暂无作品。",
    dataUrl: "数据地址",
    remove: "删除",
    edit: "修改",
    toNow: "至今",
    unsupported: "不支持的类型",
    unsupportedVideo: "你的浏览器不支持视频播放。",
    lockNeed: "请先输入密码进入编辑模式。",
    wrongPassword: "密码不正确，请重试。",
    passwordShort: "密码至少 4 位。",
    passwordMismatch: "两次输入密码不一致。",
    passwordSaved: "编辑密码已保存。",
    exportSuccess: "数据已导出。",
    importSuccess: "导入成功。",
    importFail: "导入失败，请检查文件格式。",
    statusUnlocked: "已解锁",
    statusLocked: "已锁定",
    statusNoPasswordOpen: "未设密码（可编辑）",
    loadFail: "加载失败",
    protectDetected: "检测到调试环境，页面已受保护。",
    protectReload: "刷新恢复"
  },
  en: {
    siteTitle: "My Portfolio",
    siteSubtitle: "Showcase for video, image, WebP, XML, and JSON works",
    editorTitle: "Portfolio Editor",
    editorSubtitle: "For editing only, viewing is in viewer.html",
    heroKicker: "Creative Showcase",
    language: "Language",
    themeLabel: "Theme",
    themeBehance: "Behance",
    themeMinimal: "Minimal",
    themeDark: "Dark",
    editStatusTitle: "Edit Status",
    unlockPasswordPlaceholder: "Enter edit password",
    unlockBtn: "Unlock",
    lockBtn: "Lock",
    setPassword: "Set edit password",
    passwordMin: "At least 4 characters",
    confirmPassword: "Confirm password",
    confirmPasswordPlaceholder: "Enter again",
    savePassword: "Save password",
    exportData: "Export Data",
    importData: "Import Data",
    aboutTitle: "About",
    name: "Name",
    namePlaceholder: "e.g. Alex",
    bio: "Bio",
    bioPlaceholder: "Describe your direction and strengths",
    saveAbout: "Save About",
    contactTitle: "Contact",
    email: "Email",
    phone: "Phone",
    social: "Social Link",
    saveContact: "Save Contact",
    experienceTitle: "Experience",
    company: "Company",
    companyPlaceholder: "Company name",
    role: "Role",
    rolePlaceholder: "Job title",
    startDate: "Start Date",
    endDate: "End Date",
    jobDesc: "Description",
    jobDescPlaceholder: "Responsibilities and results",
    addExperience: "Add Experience",
    updateExperience: "Update Experience",
    cancelEdit: "Cancel",
    workTitle: "Works",
    softwareTitle: "Software Skills",
    softwareSkills: "Software skills (comma separated)",
    softwarePlaceholder: "e.g. After Effects, Photoshop, Figma",
    projectRole: "Project Role",
    usedSoftware: "Software Used",
    detailTitle: "Work Details",
    openDetail: "View Details",
    closeModal: "Close",
    filter: "Filter",
    all: "All",
    video: "Video",
    image: "Image",
    searchPlaceholder: "Search by title",
    title: "Title",
    titlePlaceholder: "Work title",
    type: "Type",
    resourceUrl: "Resource URL",
    resourcePlaceholder: "https://... or ./assets/demo.mp4",
    workDesc: "Description",
    optional: "Optional",
    addWork: "Add Work",
    updateWork: "Update Work",
    noExperience: "No experience yet.",
    noWork: "No works yet.",
    dataUrl: "Data URL",
    remove: "Delete",
    edit: "Edit",
    toNow: "Present",
    unsupported: "Unsupported type",
    unsupportedVideo: "Your browser does not support video playback.",
    lockNeed: "Please unlock edit mode first.",
    wrongPassword: "Wrong password. Please try again.",
    passwordShort: "Password must be at least 4 characters.",
    passwordMismatch: "Passwords do not match.",
    passwordSaved: "Password saved.",
    exportSuccess: "Data exported.",
    importSuccess: "Import successful.",
    importFail: "Import failed. Please check JSON format.",
    statusUnlocked: "Unlocked",
    statusLocked: "Locked",
    statusNoPasswordOpen: "No password (editable)",
    loadFail: "Load failed",
    protectDetected: "Developer tools detected. Page is protected.",
    protectReload: "Reload"
  }
};

const defaultState = {
  about: { name: "你的名字", bio: "这里写你的个人介绍，例如设计方向、开发技能与项目特色。" },
  contact: { email: "", phone: "", social: "" },
  softwareSkills: ["After Effects", "Premiere Pro", "Photoshop", "Figma"],
  experiences: [],
  works: []
};
const demoWorks = [
  {
    id: "demo-work-01",
    title: "品牌短片示意 01",
    type: "video",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    desc: "用于演示视频卡片与弹窗播放效果。",
    projectRole: "导演 / 剪辑",
    usedSoftware: "Premiere Pro, After Effects"
  },
  {
    id: "demo-work-02",
    title: "视觉海报示意 02",
    type: "image",
    url: "https://picsum.photos/seed/portfolio-demo-02/1600/900",
    desc: "用于演示图片卡片展示与缩放裁切效果。",
    projectRole: "视觉设计",
    usedSoftware: "Photoshop, Illustrator"
  },
  {
    id: "demo-work-03",
    title: "产品概念片示意 03",
    type: "video",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    desc: "用于演示作品详情页中的视频区域。",
    projectRole: "动效设计",
    usedSoftware: "After Effects, Cinema 4D"
  },
  {
    id: "demo-work-04",
    title: "UI 视觉稿示意 04",
    type: "image",
    url: "https://picsum.photos/seed/portfolio-demo-04/1600/900",
    desc: "用于演示卡片列表与筛选功能。",
    projectRole: "UI 设计",
    usedSoftware: "Figma"
  },
  {
    id: "demo-work-05",
    title: "广告片示意 05",
    type: "video",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    desc: "用于演示视频类型筛选与轮播背景。",
    projectRole: "后期合成",
    usedSoftware: "After Effects, DaVinci Resolve"
  },
  {
    id: "demo-work-06",
    title: "KV 主视觉示意 06",
    type: "image",
    url: "https://picsum.photos/seed/portfolio-demo-06/1600/900",
    desc: "用于演示图片作品详情的首屏展示。",
    projectRole: "平面设计",
    usedSoftware: "Photoshop"
  },
  {
    id: "demo-work-07",
    title: "活动预热片示意 07",
    type: "video",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    desc: "用于演示多视频作品场景。",
    projectRole: "脚本 / 剪辑",
    usedSoftware: "Premiere Pro"
  },
  {
    id: "demo-work-08",
    title: "品牌延展图示意 08",
    type: "image",
    url: "https://picsum.photos/seed/portfolio-demo-08/1600/900",
    desc: "用于演示作品卡片与弹窗的一致性。",
    projectRole: "品牌设计",
    usedSoftware: "Illustrator"
  },
  {
    id: "demo-work-09",
    title: "开场动画示意 09",
    type: "video",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    desc: "用于演示轮播自动播放和卡片点击。",
    projectRole: "动效设计",
    usedSoftware: "After Effects"
  },
  {
    id: "demo-work-10",
    title: "摄影修图示意 10",
    type: "image",
    url: "https://picsum.photos/seed/portfolio-demo-10/1600/900",
    desc: "用于演示图片类作品与详情文案布局。",
    projectRole: "修图 / 调色",
    usedSoftware: "Photoshop, Lightroom"
  }
];
const demoExperiences = [
  {
    id: "demo-exp-01",
    company: "星芒创意科技",
    role: "视觉设计师",
    start: "2015-03",
    end: "2017-01",
    desc: "负责品牌主视觉、活动海报与线上宣传素材，建立统一视觉规范。"
  },
  {
    id: "demo-exp-02",
    company: "云帆互动",
    role: "UI 设计师",
    start: "2017-02",
    end: "2018-06",
    desc: "参与 B 端后台与移动端产品界面设计，输出组件化设计规范。"
  },
  {
    id: "demo-exp-03",
    company: "南桥数字",
    role: "动效设计师",
    start: "2018-07",
    end: "2019-12",
    desc: "制作品牌动画包装、短视频片头与转场模板，提升内容完成度。"
  },
  {
    id: "demo-exp-04",
    company: "曜石媒体",
    role: "视频后期",
    start: "2020-01",
    end: "2021-03",
    desc: "负责宣传片剪辑、调色与字幕包装，支持多平台内容发布。"
  },
  {
    id: "demo-exp-05",
    company: "极光品牌实验室",
    role: "高级视觉设计师",
    start: "2021-04",
    end: "2022-02",
    desc: "主导品牌升级项目，统筹 KV 设计与跨端视觉落地。"
  },
  {
    id: "demo-exp-06",
    company: "蓝屿产品中心",
    role: "资深 UI/UX 设计师",
    start: "2022-03",
    end: "2023-01",
    desc: "推动关键业务流程改版，优化信息层级与交互路径。"
  },
  {
    id: "demo-exp-07",
    company: "光谱内容工作室",
    role: "创意策划",
    start: "2023-02",
    end: "2024-01",
    desc: "策划并执行年度内容专题，联动设计、拍摄与后期团队。"
  },
  {
    id: "demo-exp-08",
    company: "天际互动",
    role: "设计负责人",
    start: "2024-02",
    end: "2025-01",
    desc: "管理设计小组，搭建设计评审机制和多角色协作流程。"
  },
  {
    id: "demo-exp-09",
    company: "北辰创新",
    role: "自由创意顾问",
    start: "2025-02",
    end: "至今",
    desc: "为品牌与产品项目提供视觉策略、作品包装与展示页优化支持。"
  }
];
let state = loadState();
let auth = loadAuth();
let ui = loadUi();
let isEditing = pageMode === "editor" ? !auth.password : false;
let editingExperienceId = null;
let editingWorkId = null;
let devtoolsTimer = null;
let heroInterval = null;
let activeHeroIndex = 0;

const byId = (id) => document.getElementById(id);
const refs = {
  aboutForm: byId("aboutForm"),
  contactForm: byId("contactForm"),
  experienceForm: byId("experienceForm"),
  workForm: byId("workForm"),
  nameInput: byId("nameInput"),
  bioInput: byId("bioInput"),
  softwareSkillsInput: byId("softwareSkillsInput"),
  emailInput: byId("emailInput"),
  phoneInput: byId("phoneInput"),
  socialInput: byId("socialInput"),
  aboutPreview: byId("aboutPreview"),
  contactPreview: byId("contactPreview"),
  experienceList: byId("experienceList"),
  timelinePrevBtn: byId("timelinePrevBtn"),
  timelineNextBtn: byId("timelineNextBtn"),
  workGallery: byId("workGallery"),
  coverName: byId("coverName"),
  coverBio: byId("coverBio"),
  companyInput: byId("companyInput"),
  roleInput: byId("roleInput"),
  startDateInput: byId("startDateInput"),
  endDateInput: byId("endDateInput"),
  descInput: byId("descInput"),
  experienceSubmitBtn: byId("experienceSubmitBtn"),
  experienceCancelBtn: byId("experienceCancelBtn"),
  workTitleInput: byId("workTitleInput"),
  workTypeInput: byId("workTypeInput"),
  workUrlInput: byId("workUrlInput"),
  workDescInput: byId("workDescInput"),
  workRoleInput: byId("workRoleInput"),
  workSoftwareInput: byId("workSoftwareInput"),
  workSubmitBtn: byId("workSubmitBtn"),
  workCancelBtn: byId("workCancelBtn"),
  workFilter: byId("workFilter"),
  workSearchInput: byId("workSearchInput"),
  languageSwitch: byId("languageSwitch"),
  themeSwitch: byId("themeSwitch"),
  editStatus: byId("editStatus"),
  unlockForm: byId("unlockForm"),
  unlockPasswordInput: byId("unlockPasswordInput"),
  lockBtn: byId("lockBtn"),
  setPasswordForm: byId("setPasswordForm"),
  newPasswordInput: byId("newPasswordInput"),
  confirmPasswordInput: byId("confirmPasswordInput"),
  exportBtn: byId("exportBtn"),
  importFileInput: byId("importFileInput"),
  softwareSkillList: byId("softwareSkillList"),
  heroCarousel: byId("heroCarousel"),
  heroDots: byId("heroDots"),
  workModal: byId("workModal"),
  workModalContent: byId("workModalContent"),
  workModalClose: byId("workModalClose")
};

init();

function init() {
  ensureDemoWorks();
  ensureDemoExperiences();
  bindCommonTools();
  if (pageMode === "editor") {
    bindEditor();
    bindAuth();
  }
  if (pageMode === "viewer") {
    bindViewer();
  }
  bindProtection();
  applyTheme();
  renderAll();
  applyLanguage();
  applyEditMode();
}

function ensureDemoWorks() {
  if (!Array.isArray(state.works) || state.works.length > 0) return;
  state.works = demoWorks.map((work) => ({ ...work }));
  saveState();
}

function ensureDemoExperiences() {
  if (!Array.isArray(state.experiences) || state.experiences.length > 0) return;
  state.experiences = demoExperiences.map((exp) => ({ ...exp }));
  saveState();
}

function bindCommonTools() {
  refs.languageSwitch?.addEventListener("change", () => {
    ui.language = refs.languageSwitch.value;
    saveUi();
    applyLanguage();
    renderAll();
  });

  refs.themeSwitch?.addEventListener("change", () => {
    ui.theme = refs.themeSwitch.value;
    saveUi();
    applyTheme();
  });

  refs.workFilter?.addEventListener("change", () => {
    ui.workFilter = refs.workFilter.value;
    saveUi();
    renderWorks();
  });

  refs.workSearchInput?.addEventListener("input", () => {
    ui.workSearch = refs.workSearchInput.value.trim();
    saveUi();
    renderWorks();
  });
}

function bindViewer() {
  refs.workModalClose?.addEventListener("click", closeWorkModal);
  refs.workModal?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
      closeWorkModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeWorkModal();
  });

  refs.timelinePrevBtn?.addEventListener("click", () => scrollTimelineByCard(-1));
  refs.timelineNextBtn?.addEventListener("click", () => scrollTimelineByCard(1));
  refs.experienceList?.addEventListener("scroll", updateTimelineNavButtons, { passive: true });
  window.addEventListener("resize", updateTimelineNavButtons);

  setupScrollFade();
}
function bindEditor() {
  refs.aboutForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!guardEdit()) return;
    state.about = { name: refs.nameInput.value.trim(), bio: refs.bioInput.value.trim() };
    state.softwareSkills = (refs.softwareSkillsInput?.value || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    saveState();
    renderAbout();
    renderSoftwareSkills();
  });

  refs.contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!guardEdit()) return;
    state.contact = { email: refs.emailInput.value.trim(), phone: refs.phoneInput.value.trim(), social: refs.socialInput.value.trim() };
    saveState();
    renderContact();
  });

  refs.experienceForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!guardEdit()) return;

    const payload = {
      company: refs.companyInput.value.trim(),
      role: refs.roleInput.value.trim(),
      start: refs.startDateInput.value,
      end: refs.endDateInput.value || t("toNow"),
      desc: refs.descInput.value.trim()
    };

    state.experiences = editingExperienceId
      ? state.experiences.map((item) => (item.id === editingExperienceId ? { ...item, ...payload } : item))
      : [{ id: crypto.randomUUID(), ...payload }, ...state.experiences];

    resetExperienceForm();
    saveState();
    renderExperiences();
  });

  refs.workForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!guardEdit()) return;

    const payload = {
      title: refs.workTitleInput.value.trim(),
      type: refs.workTypeInput.value,
      url: refs.workUrlInput.value.trim(),
      desc: refs.workDescInput.value.trim(),
      projectRole: refs.workRoleInput?.value.trim() || "",
      usedSoftware: refs.workSoftwareInput?.value.trim() || ""
    };

    state.works = editingWorkId
      ? state.works.map((item) => (item.id === editingWorkId ? { ...item, ...payload } : item))
      : [{ id: crypto.randomUUID(), ...payload }, ...state.works];

    resetWorkForm();
    saveState();
    renderWorks();
  });

  refs.experienceCancelBtn?.addEventListener("click", resetExperienceForm);
  refs.workCancelBtn?.addEventListener("click", resetWorkForm);

  refs.exportBtn?.addEventListener("click", () => {
    const payload = { exportedAt: new Date().toISOString(), state, ui };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `portfolio-backup-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    alert(t("exportSuccess"));
  });

  refs.importFileInput?.addEventListener("change", async () => {
    const file = refs.importFileInput.files?.[0];
    if (!file) return;

    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed.state || !parsed.ui) throw new Error("bad format");
      state = mergeState(parsed.state);
      ui = normalizeUi(parsed.ui);
      saveState();
      saveUi();
      applyTheme();
      renderAll();
      applyLanguage();
      alert(t("importSuccess"));
    } catch {
      alert(t("importFail"));
    } finally {
      refs.importFileInput.value = "";
    }
  });
}

function bindAuth() {
  refs.unlockForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!auth.password || refs.unlockPasswordInput.value === auth.password) {
      isEditing = true;
      refs.unlockPasswordInput.value = "";
      applyEditMode();
      return;
    }
    alert(t("wrongPassword"));
  });

  refs.setPasswordForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const newPassword = refs.newPasswordInput.value.trim();
    const confirmPassword = refs.confirmPasswordInput.value.trim();
    if (newPassword.length < 4) return alert(t("passwordShort"));
    if (newPassword !== confirmPassword) return alert(t("passwordMismatch"));
    auth.password = newPassword;
    saveAuth();
    refs.newPasswordInput.value = "";
    refs.confirmPasswordInput.value = "";
    isEditing = true;
    applyEditMode();
    alert(t("passwordSaved"));
  });

  refs.lockBtn?.addEventListener("click", () => {
    isEditing = false;
    clearEditingStates();
    applyEditMode();
  });
}

function bindProtection() {
  if (pageMode !== "viewer") return;

  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("copy", (event) => event.preventDefault());
  document.addEventListener("cut", (event) => event.preventDefault());
  document.addEventListener("dragstart", (event) => event.preventDefault());
  document.addEventListener("selectstart", (event) => event.preventDefault());

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const ctrl = event.ctrlKey || event.metaKey;
    const blocked =
      event.key === "F12" ||
      (ctrl && event.shiftKey && ["i", "j", "c"].includes(key)) ||
      (ctrl && ["u", "s", "a", "c", "x"].includes(key));
    if (blocked) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  const detectDevtools = () => {
    const widthGap = window.outerWidth - window.innerWidth > 150;
    const heightGap = window.outerHeight - window.innerHeight > 150;
    if (widthGap || heightGap) {
      showProtectionOverlay();
    }
  };

  devtoolsTimer = window.setInterval(detectDevtools, 1200);
}

function showProtectionOverlay() {
  if (document.getElementById("protectOverlay")) return;

  if (devtoolsTimer) {
    clearInterval(devtoolsTimer);
    devtoolsTimer = null;
  }

  const overlay = document.createElement("section");
  overlay.id = "protectOverlay";
  overlay.className = "protect-overlay";
  overlay.innerHTML = `
    <div class="protect-card">
      <h3>${escapeHtml(t("protectDetected"))}</h3>
      <button id="protectReloadBtn" type="button" class="ghost-btn">${escapeHtml(t("protectReload"))}</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add("protected-view", "modal-open");
  document.getElementById("protectReloadBtn")?.addEventListener("click", () => window.location.reload());
}

function applyTheme() {
  const theme = ui.theme || "behance";
  document.body.setAttribute("data-theme", theme);
  if (refs.themeSwitch) {
    refs.themeSwitch.value = theme;
  }
}

function applyLanguage() {
  document.documentElement.lang = ui.language === "en" ? "en" : "zh-CN";
  document.title = pageMode === "editor" ? t("editorTitle") : t("siteTitle");

  if (refs.languageSwitch) refs.languageSwitch.value = ui.language;
  if (refs.workFilter) refs.workFilter.value = ui.workFilter;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  if (refs.experienceSubmitBtn) refs.experienceSubmitBtn.textContent = editingExperienceId ? t("updateExperience") : t("addExperience");
  if (refs.workSubmitBtn) refs.workSubmitBtn.textContent = editingWorkId ? t("updateWork") : t("addWork");

  refs.workFilter?.querySelectorAll("option").forEach((opt) => {
    if (opt.dataset.i18n) opt.textContent = t(opt.dataset.i18n);
  });
  refs.workTypeInput?.querySelectorAll("option").forEach((opt) => {
    if (opt.dataset.i18n) opt.textContent = t(opt.dataset.i18n);
  });
  refs.themeSwitch?.querySelectorAll("option").forEach((opt) => {
    if (opt.dataset.i18n) opt.textContent = t(opt.dataset.i18n);
  });

  if (refs.workModalClose) refs.workModalClose.setAttribute("aria-label", t("closeModal"));
  applyEditMode();
}

function renderAll() {
  if (refs.nameInput) refs.nameInput.value = state.about.name || "";
  if (refs.bioInput) refs.bioInput.value = state.about.bio || "";
  if (refs.softwareSkillsInput) refs.softwareSkillsInput.value = (state.softwareSkills || []).join(", ");
  if (refs.emailInput) refs.emailInput.value = state.contact.email || "";
  if (refs.phoneInput) refs.phoneInput.value = state.contact.phone || "";
  if (refs.socialInput) refs.socialInput.value = state.contact.social || "";
  if (refs.workFilter) refs.workFilter.value = ui.workFilter;
  if (refs.workSearchInput) refs.workSearchInput.value = ui.workSearch;

  renderAbout();
  renderContact();
  renderSoftwareSkills();
  renderExperiences();
  renderWorks();
  if (pageMode === "viewer") {
    renderHeroCarousel();
  }
}

function renderAbout() {
  const name = state.about.name || "-";
  const bio = state.about.bio || "-";
  if (refs.aboutPreview) refs.aboutPreview.innerHTML = `<h3>${escapeHtml(name)}</h3><p>${escapeHtml(bio)}</p>`;
  if (refs.coverName) refs.coverName.textContent = name;
  if (refs.coverBio) refs.coverBio.textContent = bio;
}

function renderContact() {
  if (!refs.contactPreview) return;
  const socialText = state.contact.social
    ? `<a href="${escapeAttr(state.contact.social)}" target="_blank" rel="noreferrer">${escapeHtml(state.contact.social)}</a>`
    : "-";

  refs.contactPreview.innerHTML = `
    <p><strong>${t("email")}：</strong>${state.contact.email || "-"}</p>
    <p><strong>${t("phone")}：</strong>${state.contact.phone || "-"}</p>
    <p><strong>${t("social")}：</strong>${socialText}</p>
  `;
}

function renderSoftwareSkills() {
  if (!refs.softwareSkillList) return;
  refs.softwareSkillList.innerHTML = "";
  const skills = Array.isArray(state.softwareSkills) ? state.softwareSkills : [];

  if (!skills.length) {
    refs.softwareSkillList.innerHTML = `<li class="meta">-</li>`;
    return;
  }

  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.className = "skill-pill";
    item.textContent = skill;
    refs.softwareSkillList.appendChild(item);
  });
}

function renderExperiences() {
  if (!refs.experienceList) return;
  refs.experienceList.innerHTML = "";

  if (!state.experiences.length) {
    refs.experienceList.innerHTML = `<li class="list-item meta">${t("noExperience")}</li>`;
    return;
  }

  const ordered = [...state.experiences].sort((a, b) => {
    const left = String(a.start || "");
    const right = String(b.start || "");
    return pageMode === "viewer" ? left.localeCompare(right) : right.localeCompare(left);
  });

  ordered.forEach((exp) => {
    const item = document.createElement("li");
    item.className = pageMode === "viewer" ? "timeline-item" : "list-item";

    if (pageMode === "viewer") {
      item.innerHTML = `
        <p class="timeline-time">${escapeHtml(exp.start)} - ${escapeHtml(exp.end || t("toNow"))}</p>
        <h3 class="timeline-title">${escapeHtml(exp.role)} · ${escapeHtml(exp.company)}</h3>
        <p class="timeline-desc">${escapeHtml(exp.desc)}</p>
      `;
    } else {
      item.innerHTML = `
        <h3>${escapeHtml(exp.role)} · ${escapeHtml(exp.company)}</h3>
        <p class="meta">${escapeHtml(exp.start)} - ${escapeHtml(exp.end || t("toNow"))}</p>
        <p>${escapeHtml(exp.desc)}</p>
        ${isEditing ? `<div class="action-row"><button class="ghost-btn" data-edit-experience="${exp.id}" type="button">${t("edit")}</button><button class="danger-btn" data-remove-experience="${exp.id}" type="button">${t("remove")}</button></div>` : ""}
      `;
    }

    refs.experienceList.appendChild(item);
  });

  if (pageMode === "viewer") {
    focusLatestExperienceCard();
    return;
  }

  if (!isEditing) return;
  refs.experienceList.querySelectorAll("[data-remove-experience]").forEach((btn) => btn.addEventListener("click", () => removeExperience(btn.dataset.removeExperience)));
  refs.experienceList.querySelectorAll("[data-edit-experience]").forEach((btn) => btn.addEventListener("click", () => startEditExperience(btn.dataset.editExperience)));
}

function focusLatestExperienceCard() {
  if (!refs.experienceList) return;
  requestAnimationFrame(() => {
    refs.experienceList.scrollTo({ left: refs.experienceList.scrollWidth, behavior: "auto" });
    updateTimelineNavButtons();
  });
}

function scrollTimelineByCard(direction) {
  if (!refs.experienceList) return;
  const card = refs.experienceList.querySelector(".timeline-item");
  const step = card ? card.getBoundingClientRect().width + 14 : 360;
  refs.experienceList.scrollBy({ left: direction * step, behavior: "smooth" });
}

function updateTimelineNavButtons() {
  if (!refs.experienceList || !refs.timelinePrevBtn || !refs.timelineNextBtn) return;
  const maxLeft = Math.max(0, refs.experienceList.scrollWidth - refs.experienceList.clientWidth);
  const current = refs.experienceList.scrollLeft;
  const atStart = current <= 4;
  const atEnd = current >= maxLeft - 4;

  refs.timelinePrevBtn.disabled = atStart;
  refs.timelineNextBtn.disabled = atEnd;
}

function getFilteredWorks() {
  const search = (ui.workSearch || "").toLowerCase();
  return state.works.filter((work) => {
    const typeOK = ui.workFilter === "all" || work.type === ui.workFilter;
    const keywordOK = !search || (work.title || "").toLowerCase().includes(search);
    return typeOK && keywordOK;
  });
}

function renderWorks() {
  if (!refs.workGallery) return;

  const filteredWorks = getFilteredWorks();
  refs.workGallery.innerHTML = "";

  if (!filteredWorks.length) {
    refs.workGallery.innerHTML = `<article class="work-item meta">${t("noWork")}</article>`;
    return;
  }

  filteredWorks.forEach((work, idx) => {
    const card = document.createElement("article");
    card.className = pageMode === "viewer" ? "work-item work-card" : "work-item";
    if (pageMode === "viewer") card.dataset.openWork = work.id;
    card.style.animationDelay = `${Math.min(idx * 60, 420)}ms`;

    if (pageMode === "viewer") {
      card.innerHTML = `
        <div class="work-card-media">${renderWorkContent(work)}</div>
        <div class="work-card-body">
          <p class="meta">${escapeHtml((work.type || "").toUpperCase())}</p>
          <h3>${escapeHtml(work.title || "")}</h3>
          ${work.desc ? `<p class="work-side-desc">${escapeHtml(work.desc)}</p>` : ""}
          <button class="ghost-btn" type="button">${t("openDetail")}</button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <h3>${escapeHtml(work.title)} <span class="meta">(${escapeHtml(work.type.toUpperCase())})</span></h3>
        ${work.desc ? `<p>${escapeHtml(work.desc)}</p>` : ""}
        ${renderWorkContent(work)}
        ${work.projectRole ? `<p class="meta">${t("projectRole")}：${escapeHtml(work.projectRole)}</p>` : ""}
        ${work.usedSoftware ? `<p class="meta">${t("usedSoftware")}：${escapeHtml(work.usedSoftware)}</p>` : ""}
        ${isEditing ? `<div class="action-row"><button class="ghost-btn" data-edit-work="${work.id}" type="button">${t("edit")}</button><button class="danger-btn" data-remove-work="${work.id}" type="button">${t("remove")}</button></div>` : ""}
      `;
    }

    refs.workGallery.appendChild(card);
  });

  if (pageMode === "editor" && isEditing) {
    refs.workGallery.querySelectorAll("[data-remove-work]").forEach((btn) => btn.addEventListener("click", () => removeWork(btn.dataset.removeWork)));
    refs.workGallery.querySelectorAll("[data-edit-work]").forEach((btn) => btn.addEventListener("click", () => startEditWork(btn.dataset.editWork)));
  }

  if (pageMode === "viewer") {
    refs.workGallery.querySelectorAll(".work-card[data-open-work]").forEach((cardEl) => {
      cardEl.addEventListener("click", () => {
        const target = state.works.find((item) => item.id === cardEl.dataset.openWork);
        if (target) openWorkModal(target);
      });
    });
  }

  hydrateCodeBlocks(refs.workGallery);
}

function renderWorkContent(work) {
  const safeUrl = escapeAttr(work.url || "");
  const type = (work.type || "").toLowerCase();

  if (type === "video") return `<video controls preload="metadata"><source src="${safeUrl}">${t("unsupportedVideo")}</video>`;
  if (type === "image" || type === "webp") return `<img src="${safeUrl}" alt="${escapeAttr(work.title || "")}" loading="lazy" />`;
  if (type === "xml" || type === "json") {
    return `<div class="meta">${t("dataUrl")}：<a href="${safeUrl}" target="_blank" rel="noreferrer">${escapeHtml(work.url || "")}</a></div><pre class="code-box" data-code-url="${safeUrl}" data-code-type="${type}">Loading...</pre>`;
  }
  return `<p class="meta">${t("unsupported")}</p>`;
}

function renderHeroCarousel() {
  if (!refs.heroCarousel || !refs.heroDots) return;
  const slides = state.works.slice(0, 6);
  refs.heroCarousel.innerHTML = "";
  refs.heroDots.innerHTML = "";
  activeHeroIndex = 0;

  if (!slides.length) {
    refs.heroCarousel.innerHTML = `<div class="hero-slide active"><div class="hero-slide-fallback"><p>${t("noWork")}</p></div></div>`;
    return;
  }

  slides.forEach((work, index) => {
    const slide = document.createElement("article");
    slide.className = `hero-slide${index === 0 ? " active" : ""}`;
    const type = (work.type || "").toLowerCase();
    const safeUrl = escapeAttr(work.url || "");

    if (type === "video") {
      slide.innerHTML = `<video muted loop playsinline preload="metadata" ${index === 0 ? "autoplay" : ""}><source src="${safeUrl}"></video>`;
    } else if (type === "image" || type === "webp") {
      slide.innerHTML = `<img src="${safeUrl}" alt="${escapeAttr(work.title || "")}" loading="lazy" />`;
    } else {
      slide.innerHTML = `<div class="hero-slide-fallback"><p>${escapeHtml(work.title || "Untitled")}</p><span>${escapeHtml((work.type || "").toUpperCase())}</span></div>`;
    }

    refs.heroCarousel.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `hero-dot${index === 0 ? " active" : ""}`;
    dot.setAttribute("aria-label", `slide ${index + 1}`);
    dot.addEventListener("click", () => activateHeroSlide(index));
    refs.heroDots.appendChild(dot);
  });

  startHeroAutoplay(slides.length);
}

function activateHeroSlide(index) {
  if (!refs.heroCarousel || !refs.heroDots) return;
  const slides = refs.heroCarousel.querySelectorAll(".hero-slide");
  const dots = refs.heroDots.querySelectorAll(".hero-dot");
  slides.forEach((slide, idx) => {
    const active = idx === index;
    slide.classList.toggle("active", active);
    const video = slide.querySelector("video");
    if (video) {
      if (active) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  });
  dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
  activeHeroIndex = index;
}

function startHeroAutoplay(length) {
  if (heroInterval) {
    clearInterval(heroInterval);
    heroInterval = null;
  }
  if (length <= 1) return;
  heroInterval = window.setInterval(() => {
    activateHeroSlide((activeHeroIndex + 1) % length);
  }, 5200);
}

function openWorkModal(work) {
  if (!refs.workModal || !refs.workModalContent) return;
  refs.workModalContent.innerHTML = `
    <h2 id="workModalTitle">${escapeHtml(work.title || t("detailTitle"))}</h2>
    <div class="work-modal-media">${renderWorkContent(work)}</div>
    <p class="work-modal-desc">${escapeHtml(work.desc || "-")}</p>
    <p><strong>${t("projectRole")}：</strong>${escapeHtml(work.projectRole || "-")}</p>
    <p><strong>${t("usedSoftware")}：</strong>${escapeHtml(work.usedSoftware || "-")}</p>
  `;

  refs.workModal.classList.remove("hidden");
  refs.workModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  hydrateCodeBlocks(refs.workModalContent);
}

function closeWorkModal() {
  if (!refs.workModal) return;
  refs.workModal.classList.add("hidden");
  refs.workModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupScrollFade() {
  if (typeof IntersectionObserver !== "function") return;
  const sections = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
}
function startEditExperience(id) {
  const target = state.experiences.find((item) => item.id === id);
  if (!target) return;
  editingExperienceId = id;
  refs.companyInput.value = target.company;
  refs.roleInput.value = target.role;
  refs.startDateInput.value = target.start;
  refs.endDateInput.value = target.end === t("toNow") ? "" : target.end;
  refs.descInput.value = target.desc;
  refs.experienceSubmitBtn.textContent = t("updateExperience");
}

function startEditWork(id) {
  const target = state.works.find((item) => item.id === id);
  if (!target) return;
  editingWorkId = id;
  refs.workTitleInput.value = target.title;
  refs.workTypeInput.value = target.type;
  refs.workUrlInput.value = target.url;
  refs.workDescInput.value = target.desc;
  if (refs.workRoleInput) refs.workRoleInput.value = target.projectRole || "";
  if (refs.workSoftwareInput) refs.workSoftwareInput.value = target.usedSoftware || "";
  refs.workSubmitBtn.textContent = t("updateWork");
}

function resetExperienceForm() {
  if (!refs.experienceForm) return;
  refs.experienceForm.reset();
  editingExperienceId = null;
  refs.experienceSubmitBtn.textContent = t("addExperience");
}

function resetWorkForm() {
  if (!refs.workForm) return;
  refs.workForm.reset();
  editingWorkId = null;
  refs.workSubmitBtn.textContent = t("addWork");
}

function clearEditingStates() {
  resetExperienceForm();
  resetWorkForm();
}

function removeExperience(id) {
  state.experiences = state.experiences.filter((item) => item.id !== id);
  saveState();
  renderExperiences();
}

function removeWork(id) {
  state.works = state.works.filter((item) => item.id !== id);
  saveState();
  renderWorks();
}

function applyEditMode() {
  if (pageMode !== "editor") return;

  document.body.classList.toggle("is-editing", isEditing);
  if (!auth.password) {
    refs.editStatus.textContent = isEditing ? t("statusNoPasswordOpen") : "-";
    refs.setPasswordForm.classList.remove("hidden");
  } else {
    refs.editStatus.textContent = isEditing ? t("statusUnlocked") : t("statusLocked");
    refs.setPasswordForm.classList.toggle("hidden", !isEditing);
  }

  refs.lockBtn.classList.toggle("hidden", !isEditing);
  refs.unlockForm.classList.toggle("hidden", isEditing);

  renderExperiences();
  renderWorks();
}

function guardEdit() {
  if (pageMode !== "editor") return false;
  if (isEditing) return true;
  alert(t("lockNeed"));
  return false;
}

async function hydrateCodeBlocks(root = document) {
  const blocks = root.querySelectorAll("[data-code-url]");
  for (const block of blocks) {
    try {
      const response = await fetch(block.dataset.codeUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const raw = await response.text();
      block.textContent = formatCode(raw, block.dataset.codeType);
    } catch (error) {
      block.textContent = `${t("loadFail")}: ${error.message}`;
    }
  }
}

function formatCode(raw, type) {
  if (type === "json") return JSON.stringify(JSON.parse(raw), null, 2);
  if (type === "xml") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(raw, "application/xml");
    if (doc.querySelector("parsererror")) return raw;
    return new XMLSerializer().serializeToString(doc);
  }
  return raw;
}

function mergeState(candidate) {
  const base = structuredClone(defaultState);
  return {
    about: { ...base.about, ...(candidate.about || {}) },
    contact: { ...base.contact, ...(candidate.contact || {}) },
    softwareSkills: Array.isArray(candidate.softwareSkills) ? candidate.softwareSkills.filter(Boolean) : base.softwareSkills,
    experiences: Array.isArray(candidate.experiences) ? candidate.experiences : [],
    works: Array.isArray(candidate.works) ? candidate.works.map((item) => ({ ...item, projectRole: item.projectRole || "", usedSoftware: item.usedSoftware || "" })) : []
  };
}

function normalizeUi(candidate) {
  const workFilter = ["all", "video", "image", "webp", "xml", "json"].includes(candidate.workFilter)
    ? candidate.workFilter
    : "all";

  const theme = ["behance", "minimal", "dark"].includes(candidate.theme)
    ? candidate.theme
    : "behance";

  return {
    language: candidate.language === "en" ? "en" : "zh",
    workFilter,
    workSearch: typeof candidate.workSearch === "string" ? candidate.workSearch : "",
    theme
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return structuredClone(defaultState);
    return mergeState(JSON.parse(saved));
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function loadAuth() {
  try {
    const saved = localStorage.getItem(authKey);
    if (!saved) return { password: "" };
    const parsed = JSON.parse(saved);
    return { password: parsed.password || "" };
  } catch {
    return { password: "" };
  }
}

function saveAuth() {
  localStorage.setItem(authKey, JSON.stringify(auth));
}

function loadUi() {
  try {
    const saved = localStorage.getItem(uiKey);
    if (!saved) return { language: "zh", workFilter: "all", workSearch: "", theme: "behance" };
    return normalizeUi(JSON.parse(saved));
  } catch {
    return { language: "zh", workFilter: "all", workSearch: "", theme: "behance" };
  }
}

function saveUi() {
  localStorage.setItem(uiKey, JSON.stringify(ui));
}

function t(key) {
  return i18n[ui.language]?.[key] || i18n.zh[key] || key;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(text) {
  return escapeHtml(text).replaceAll("`", "&#96;");
}















































