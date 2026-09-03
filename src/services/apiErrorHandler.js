export function getApiErrorMessage(error) {
  if (!error) {
    return "Something went wrong.";
  }

  if (!error.response) {
    return "Unable to connect to the server. Please try again.";
  }

  const { status, data } = error.response;

  if (data?.message) {
    return data.message;
  }

  switch (status) {
    case 400:
      return "Invalid request. Please check your input.";

    case 401:
      return "Your session has expired. Please login again.";

    case 403:
      return "You do not have permission to perform this action.";

    case 404:
      return "The requested resource was not found.";

    case 409:
      return "This request conflicts with existing data.";

    case 500:
      return "Something went wrong on the server.";

    case 502:
    case 503:
    case 504:
      return "The server is temporarily unavailable.";

    default:
      return "An unexpected error occurred. Please try again.";
  }
}

export function isNetworkError(error) {
  return !error?.response;
}