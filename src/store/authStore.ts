import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  favoriteGenres: string[];
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(persist(
  (set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    login: async (email: string, password: string) => {
      set({ isLoading: true, error: null });
      try {
        // TODO: Implement API call
        const mockUser: User = {
          id: '1',
          name: 'Jane Reader',
          email,
          bio: 'Book lover and community member',
          favoriteGenres: ['Fiction', 'Fantasy'],
          createdAt: new Date().toISOString(),
        };
        set({ user: mockUser, isAuthenticated: true });
      } catch (error) {
        set({ error: 'Login failed. Please try again.' });
        throw error;
      } finally {
        set({ isLoading: false });
      }
    },

    register: async (name: string, email: string, password: string) => {
      set({ isLoading: true, error: null });
      try {
        // TODO: Implement API call
        const newUser: User = {
          id: Date.now().toString(),
          name,
          email,
          favoriteGenres: [],
          createdAt: new Date().toISOString(),
        };
        set({ user: newUser, isAuthenticated: true });
      } catch (error) {
        set({ error: 'Registration failed. Please try again.' });
        throw error;
      } finally {
        set({ isLoading: false });
      }
    },

    logout: () => {
      set({ user: null, isAuthenticated: false });
    },

    setUser: (user: User) => {
      set({ user, isAuthenticated: true });
    },

    updateProfile: async (updates: Partial<User>) => {
      set({ isLoading: true, error: null });
      try {
        // TODO: Implement API call
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        }));
      } catch (error) {
        set({ error: 'Profile update failed.' });
        throw error;
      } finally {
        set({ isLoading: false });
      }
    },

    clearError: () => {
      set({ error: null });
    },
  }),
  {
    name: 'ocean-bookstore-auth',
    partialize: (state) => ({
      user: state.user,
      isAuthenticated: state.isAuthenticated,
    }),
  }
));