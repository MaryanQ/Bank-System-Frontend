/**
 * Utility Method to create options for a fetch call
 * @param method GET, POST, PUT, DELETE
 * @param body  The request body (only relevant for POST and PUT)
 * @returns
 */
export function makeOptions(method: string, body: object | null): RequestInit {
  const opts: RequestInit = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

/**
 * Utility Method to handle http-errors returned as a JSON-response with fetch
 * Meant to be used in the first .then() clause after a fetch-call
 */
export async function handleHttpErrors(res: Response) {
  if (!res.ok) {
    try {
      const errorResponse = await res.json();
      const msg = errorResponse.message
        ? errorResponse.message
        : "No details provided";
      throw new Error(msg);
    } catch (error) {
      throw new Error(res.statusText);
    }
  }

  // If the response has no content (status 204), return null or appropriate response
  if (res.status === 204) {
    return null;
  }

  // If the response has content, return the parsed JSON
  return await res.json();
}
