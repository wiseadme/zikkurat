export const themeData = JSON.parse("{\"colorMode\":\"light\",\"home\":\"/\",\"repo\":\"https://github.com/wiseadme/nervue\",\"editLink\":false,\"contributors\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"Русский\",\"navbar\":[{\"text\":\"Руководство\",\"link\":\"/introduction.html\"},{\"text\":\"API\",\"link\":\"/api/\"}],\"sidebar\":{\"/api/\":[{\"text\":\"\",\"children\":[\"/api/index.md\"]}],\"/\":[{\"text\":\"Введение\",\"children\":[\"/introduction.md\"]},{\"text\":\"Начинаем\",\"children\":[\"/getting-started.md\"]},{\"text\":\"Основные концепции\",\"children\":[\"/core-concepts/state.md\",\"/core-concepts/computed.md\",\"/core-concepts/guards.md\",\"/core-concepts/actions.md\",\"/core-concepts/expose.md\",\"/core-concepts/plugins.md\"]}]},\"home\":\"/\",\"selectLanguageText\":\"Язык\",\"lastUpdatedText\":\"Последнее обновление\",\"contributorsText\":\"Контрибутор\"},\"/en/\":{\"selectLanguageName\":\"English\",\"label\":\"English\",\"navbar\":[{\"text\":\"Guide\",\"link\":\"/en/introduction.html\"},{\"text\":\"API\",\"link\":\"/en/api/\"}],\"sidebar\":{\"/en/api/\":[{\"text\":\"\",\"children\":[\"/en/api/index.md\"]}],\"/en/\":[{\"text\":\"Introduction\",\"collapsible\":false,\"collapsed\":false,\"children\":[{\"text\":\"Nervue\",\"link\":\"/en/introduction.html\"}]},{\"text\":\"Main concepts\",\"children\":[{\"text\":\"State\",\"link\":\"/en/core-concepts/state.html\"},{\"text\":\"Computed\",\"link\":\"/en/core-concepts/computed.html\"},{\"text\":\"Guards\",\"link\":\"/en/core-concepts/guards.html\"},{\"text\":\"Actions\",\"link\":\"/en/core-concepts/actions.html\"},{\"text\":\"Expose\",\"link\":\"/en/core-concepts/expose.html\"},{\"text\":\"Plugins\",\"link\":\"/en/core-concepts/plugins.html\"}]}]},\"home\":\"/en/\",\"selectLanguageText\":\"Languages\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributor\"}},\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
