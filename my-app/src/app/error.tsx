'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <div>{error.message}</div>
      <div onClick={reset}>Перезагрузить</div>
    </div>
  );
}
