<script setup lang="ts">
import Prism from 'prismjs';
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useClipboard } from '@vueuse/core';

// definePropsだとreadonlyになるためv-modelで双方向バインディングにする
const htmlContent = defineModel<string>('htmlContent', { required: true });
const cssContent = defineModel<string>('cssContent', { required: true });

const id = defineProps<{ id: string }>();

const isHtml = ref(true);

// クリップボート機能
const source = ref('');
const { copy, copied } = useClipboard({ source });

/**
 * プレビューのスタイルを動的に管理するためにheadタグに追加
 */
const updateStyleTag = () => {
  removeStyleTag();

  const styleTag = document.createElement('style');
  styleTag.id = `dynamic-preview-style-${id.id}`;
  styleTag.textContent = cssContent.value;
  document.head.appendChild(styleTag);
  Prism.highlightAll();
};

/**
 * プレビューのスタイルをリセット
 */
const removeStyleTag = () => {
  const existingStyleTag = document.getElementById(`dynamic-preview-style-${id.id}`);
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
      <font-awesome-icon
        v-if="!copied"
        :icon="['fas', 'clipboard']"
        :class="['clipboard']"
        style="width: 2.8rem; height: 2.8rem; color: #51B883"
        @click="copy(isHtml ? htmlContent : cssContent)"
      />
      <font-awesome-icon
        v-else
        :icon="['fas', 'clipboard-check']"
        :class="['clipboard']"
        style="width: 2.8rem; height: 2.8rem; color: #2CAC6E"
        @click="copy(isHtml ? htmlContent : cssContent)"
      />
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
  color: #7F7F7F;
  font-size: 1.6rem
}

.code-block {
  position: relative;
  display: flex;
  gap: 0.1rem
}

.code-block-container {
  width: 100%;
  height: 32rem;
  font-size: 1.6rem;
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
  font-size: 1.6rem;
  position: absolute;
  left: 0;
  top: 0.1rem;
  display: flex;
  border: 0.1rem solid #4D4D4D
}

.code-block-toggle {
  background-color: #FFF;
  color: #4D4D4D;
  width: 6rem;
  text-align: center;
  cursor: pointer;
  padding: 0.2rem
}

.code-block-toggle-active {
  background-color: #4979F5;
  color: #FFF;
}

.code-block-edit {
  display: block;
}

.clipboard {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
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
    color: #7F7F7F;
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
