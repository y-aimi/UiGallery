<script setup lang="ts">
import Prism from 'prismjs';
import { ref, watch } from 'vue';
import { AppColors } from '~/common/AppColors';

// definePropsだとreadonlyになるためv-modelで双方向バインディングにする
const htmlContent = defineModel<string>('htmlContent', { required: true });
const cssContent = defineModel<string>('cssContent', { required: true });

const isHtml = ref(true);

/**
 * プレビューのスタイルを動的に管理するためにheadタグに追加
 */
const updateStyleTag = () => {
  removeStyleTag();

  const styleTag = document.createElement('style');
  styleTag.id = 'dynamic-preview-style';
  styleTag.textContent = cssContent.value;
  document.head.appendChild(styleTag);
};

/**
 * プレビューのスタイルをリセット
 */
const removeStyleTag = () => {
  const existingStyleTag = document.getElementById('dynamic-preview-style');
  if (existingStyleTag) {
    existingStyleTag.remove();
  }
};

// 初回マウント時にプレビュースタイルを付与
onMounted(() => {
  updateStyleTag();
});

// アンマウント時にプレビュースタイルを削除
onBeforeUnmount(() => {
  removeStyleTag();
});

// スタイル更新とハイライト更新
watch([htmlContent, cssContent, isHtml], async () => {
  updateStyleTag();

  // NOTE: DOM更新後にハイライトする
  await nextTick();
  Prism.highlightAll();
});

/**
 * HTMLコードブロックでフォーカスが外れた際のイベント
 */
const handleBlurHtml = (event: FocusEvent) => {
  const target = event.target as HTMLElement;
  const codeElement = target?.querySelector('code');
  if (codeElement && codeElement.textContent) {
    htmlContent.value = codeElement.textContent;
  }
  Prism.highlightAll();
};

/**
 * CSSコードブロックでフォーカスが外れた際のイベント
 */
const handleBlurCss = (event: FocusEvent) => {
  const target = event.target as HTMLElement;
  const codeElement = target?.querySelector('code');
  if (codeElement && codeElement.textContent) {
    cssContent.value = codeElement.textContent;
  }
  Prism.highlightAll();
};
</script>

<template>
  <div>
    <div class="preview-container">
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="preview"
        v-html="htmlContent"
      />
    </div>
    <div class="code-block">
      <ul
        class="code-block-toggle-container"
      >
        <li
          :class="['code-block-toggle', isHtml ? 'code-block-toggle-active' : '']"
          @click="isHtml = true"
        >
          HTML
        </li>
        <li
          :class="['code-block-toggle', !isHtml ? 'code-block-toggle-active' : '']"
          @click="isHtml = false"
        >
          CSS
        </li>
      </ul>
      <div :class="'code-block-container'">
        <pre
          v-if="isHtml"
          key="html"
          :class="['language-html', 'code-block-html']"
          contentEditable="plaintext-only"
          @blur="handleBlurHtml"
        >
          <code :class="['language-html', 'code-block-edit']">{{ htmlContent }}</code>
        </pre>
        <pre
          v-else
          key="css"
          :class="['language-css', 'code-block-css']"
          contentEditable="plaintext-only"
          @blur="handleBlurCss"
        >
          <code :class="['language-css', 'code-block-edit']">{{ cssContent }}</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d2d2d;
  padding: 3.2rem;
  height: 16rem
}

.preview-container::before {
  content: 'プレビュー';
  position: absolute;
  left: 0.4rem;
  top: 0.2rem;
  color: #7F7F7F; /* AppColors.gray500 */
  font-size: 1rem
}

.code-block {
  position: relative;
  display: flex;
  gap: 0.1rem
}

.code-block-container {
  width: 100%;
  height: 32rem;
  font-size: 1.4rem;
}

.code-block-html {
  height: 100%;
  overflow: auto;
}

.language-html.code-block-html {
  margin: 0.1rem 0;
  padding: 0 1rem
}

.code-block-css {
  height: 100%;
  white-space: nowrap;
  overflow: auto;
}

.language-css.code-block-css {
  margin: 0.1rem 0;
  padding: 0 1rem
}

.code-block-toggle-container {
  font-size: 1.4rem;
  position: absolute;
  left: 0;
  top: 0.1rem;
  display: flex;
  border: v-bind(`0.1rem solid ${AppColors.gray700}`);
}

.code-block-toggle {
  background-color: v-bind('AppColors.white');
  color: v-bind('AppColors.gray700');
  width: 6rem;
  text-align: center;
  cursor: pointer;
  padding: 0.2rem
}

.code-block-toggle-active {
  background-color: v-bind('AppColors.blue500');
  color: v-bind('AppColors.white');
}

.code-block-edit {
  display: block;
}

@media (width >= 960px) {
  .preview-container {
    padding: 2.4rem;
    margin: 0 1.6rem
  }

  .preview-container::before {
    content: 'プレビュー';
    position: absolute;
    left: 0.4rem;
    top: 0.2rem;
    color: v-bind('AppColors.gray500');
    font-size: 1.6rem
  }

  .code-block {
    margin: 0 1.6rem
  }

  .code-block-container {
    font-size: 1.6rem
  }
}
</style>
