/**
 * File download utility
 */

export function downloadFile(content: string, filename: string): void {
  try {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(element.href);
  } catch (error) {
    throw new Error('Failed to download file');
  }
}

export function generateFilename(): string {
  const randomSuffix = Math.floor(Math.random() * 900000) + 100000;
  return `obfuscated_code_${randomSuffix}.lua`;
}
