import Block from './Block';

export function renderDom(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error('Root not found!');
  }
  /** Если планируется использовать - раскомментировать строку ниже! */
  // component.dispatchComponentDidMount();
  root.innerHTML = '';
  root.append(component.getContent()!);
}
